import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import actions from '../actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from '../components/LoginForm'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (event) {
    const value = event.target.value
    const name = event.target.name
    this.setState(state => {
      return {
        [name]: value
      }
    })
  }
  onSubmit (event) {
    event.preventDefault()
    this.props.loginUser({
      username: this.state.username,
      password: this.state.password
    })
  }
  render () {
    let result = null
    const { loginSucceeded } = this.props
    console.log(loginSucceeded)
    if (loginSucceeded) {
      result = <Redirect to='app' />
    } else {
      result = <LoginForm
        username={this.state.username}
        password={this.state.password}
        error={this.props.loginError}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
        disabled={this.props.loginRequested}
      />
    }
    return (
      <Fragment>
        {result}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    loginRequested: state.user.loginRequested,
    loginError: state.user.loginError,
    loginSucceeded: state.user.loginSucceeded,
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch(actions.loginUser(user))
  }
}

Login.propTypes = {
  loginUser: PropTypes.func,
  loginError: PropTypes.bool,
  loginRequested: PropTypes.bool,
  loginSucceeded: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const FourOhFour = (props) => {
  console.log(props.disabled)
  return (
    <div>404{props.disabled}</div>
  )
}

const mapStateToProps = state => {
  return {
    disabled: state.user.loginRequested
  }
}

FourOhFour.propTypes = {
  disabled: PropTypes.bool
}

export default connect(mapStateToProps)(FourOhFour)

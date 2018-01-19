import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import FontIcon from 'material-ui/FontIcon'
import RaisedButton from 'material-ui/RaisedButton'
import { blue500 } from 'material-ui/styles/colors'
import styles from './styles.css'

const iconStyles = {
  marginRight: 18
}

const paperStyles = {
  width: 402
}

const buttonStyles = {
  margin: 12,
  width: 120
}

const LoginForm = ({username, password, onChange, onSubmit, error, disabled}) => {
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <Paper zDepth={2} style={paperStyles}>
          <div className={styles.logoContainer}>
            <Link to={'/'}>
              <RaisedButton label='Mentor me' primary fullWidth style={{height: 60}} />
            </Link>
          </div>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.field}>
              <FontIcon className='material-icons' style={iconStyles} color={blue500}>face</FontIcon>
              <TextField
                hintText='Username'
                fullWidth
                value={username}
                name='username'
                onChange={onChange}
                required
              />
            </div>
            <div className={styles.field}>
              <FontIcon className='material-icons' style={iconStyles} color={blue500}>lock</FontIcon>
              <TextField
                hintText='Password'
                errorText={error && 'Wrong username or password.'}
                fullWidth
                name='password'
                value={password}
                onChange={onChange}
                type='password'
                required
              />
            </div>
            <div className={styles.buttonContainer}>
              <RaisedButton label='Login' primary style={buttonStyles} type='submit' disabled={disabled} />
            </div>
            <div className={styles.registerContainer}>
              <span>New to us? <a href='#'>Sign up</a></span>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  error: PropTypes.bool,
  disabled: PropTypes.bool
}

export default LoginForm

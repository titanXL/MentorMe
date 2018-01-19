import * as constants from '../actions/constants'

export const initialState = {
  user: {},
  loginRequested: false,
  loginError: false,
  loginSucceeded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginRequested: true,
        loginError: false
      })
    case constants.USER_LOGGEDIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.value,
        loginRequested: false,
        loginSucceeded: true
      })
    case constants.USER_LOGGEDIN_FAIL:
      return Object.assign({}, state, {
        loginError: true,
        loginRequested: false,
        loginSucceeded: false
      })
    default:
      return state
  }
}

export default reducer

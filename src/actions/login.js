import * as constants from './constants'

export function loginUser (user) {
  return {
    type: constants.USER_LOGIN_REQUEST,
    value: user
  }
}

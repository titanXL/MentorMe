import { call, put } from 'redux-saga/effects'
import * as constants from '../actions/constants'
import { loginUser } from '../helpers'
import { loginUserSaga } from './login'

describe('login saga', () => {
  it('should call the api and set result to user', () => {
    const generator = loginUserSaga()
    expect(generator.next().value).toEqual(call(loginUser))
  })
  it('should put action', () => {
    const generator = loginUserSaga()
    generator.next()
    const user = {
      id: 2
    }
    const action = {
      type: constants.USER_LOGGEDIN_SUCCESS,
      value: user
    }
    expect(generator.next(user).value).toEqual(put(action))
  })
})
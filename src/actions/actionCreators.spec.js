import * as constants from './constants'
import { loginUser } from './login'

describe('actionCreators', () => {
  it('should create a login user action', () => {
    const user = {
      username: 'Test',
      password: '123'
    }
    const expectedAction = {
      type: constants.USER_LOGIN_REQUEST,
      value: user
    }
    expect(loginUser(user)).toEqual(expectedAction)
  })
})

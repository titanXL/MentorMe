import reducer, { initialState } from './user'
import * as constants from '../actions/constants'

describe('user reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should set login request state to true', () => {
    const action = {
      type: constants.USER_LOGIN_REQUEST
    }
    const expectedState = Object.assign({}, initialState, {
      loginRequested: true,
      loginError: false
    })
    expect(reducer(undefined, action)).toEqual(expectedState)
  })
  it('should set user state', () => {
    const user = {
      id: 5
    }
    const action = {
      type: constants.USER_LOGGEDIN_SUCCESS,
      value: user
    }
    const expected = Object.assign({}, initialState, {
      user: user,
      loginRequested: false,
      loginSucceeded: true
    })
    const state = Object.assign({}, initialState, {
      loginRequested: true
    })
    expect(reducer(state, action)).toEqual(expected)
  })
  it('should set error state', () => {
    const action = {
      type: constants.USER_LOGGEDIN_FAIL
    }
    const expected = Object.assign({}, initialState, {
      loginError: true,
      loginRequested: false,
      loginSucceeded: false
    })
    expect(reducer(undefined, action)).toEqual(expected)
  })
})

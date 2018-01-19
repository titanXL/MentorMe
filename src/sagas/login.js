import { call, put } from 'redux-saga/effects'
import { loginUser } from '../helpers'
import * as constants from '../actions/constants'

export function *loginUserSaga (action) { // eslint-disable-line
  try {
    const user = yield call(loginUser)
    yield put({type: constants.USER_LOGGEDIN_SUCCESS, value: user})
  } catch (e) {
    yield put({type: constants.USER_LOGGEDIN_FAIL})
  }
}

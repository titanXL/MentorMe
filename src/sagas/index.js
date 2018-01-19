import { takeLatest } from 'redux-saga/effects'
import { loginUserSaga } from './login'
import * as constants from '../actions/constants'

function *rootSaga () { // eslint-disable-line
  yield takeLatest(constants.USER_LOGIN_REQUEST, loginUserSaga)
}

export default rootSaga

import injectTapEventPlugin from 'react-tap-event-plugin' // eslint-disable-line
import 'regenerator-runtime/runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './Routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import './normalize.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { blue500 } from 'material-ui/styles/colors'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500
  }
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router>
        <Routes />
      </Router>
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './containers/Login'
import FourOhFour from './components/FourOhFour'

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Login} />
      <Route component={FourOhFour} />
    </Switch>
  )
}

export default Routes

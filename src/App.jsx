import * as React from 'react'
import PrivateRoute from './components/PrivateRoute'
import LoginView from './views/Login'
import HomeView from './views/Home'
import ErrorView from './views/Error'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={HomeView} redirect="/login" authenticated={false} />
        <Route path="/login" component={LoginView} />
        <Route path="*" component={ErrorView} />
      </Switch>
    </Router>
  )
}
export default App

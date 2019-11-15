import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, authenticated, redirect, props, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (authenticated === true ? <Component {...props} /> : <Redirect to={redirect} />)}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  authenticated: PropTypes.bool.isRequired,
  props: PropTypes.object,
  redirect: PropTypes.string
}

export default PrivateRoute

import * as React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Login.module.scss'
function Layout({ children }) {
  return <div className="columns full-height is-mobile is-vcentered">{children}</div>
}
Layout.propTypes = {
  children: PropTypes.any
}

const Login = () => {
  const className = classNames(
    'column',
    'is-half-desktop',
    ';is-offset-one-quarter-desktop',
    'is-three-fifths-tablet',
    'is-offset-one-fifth-tablet',
    'has-text-centered'
  )
  return (
    <Layout>
      <div className={className}>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">Login</p>
          </header>
          <div className="card-content">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem reprehenderit asperiores
                provident doloribus, sint numquam eaque obcaecati harum, minus labore fugit officia in assumenda debitis
                id quidem. Nulla, fugit!
              </p>
            </div>
          </div>
          <footer className="card-footer has-padding-15 justify-end">
            <button className="button is-primary has-width-100 has-margin-right-15">Login</button>
            <button className="button has-width-100">Register</button>
          </footer>
        </div>
      </div>
    </Layout>
  )
}
export default Login

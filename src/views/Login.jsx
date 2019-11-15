import * as React from 'react'
import styles from './Login.module.scss'
function Layout({ children }) {
  return <div className="columns full-height is-mobile is-vcentered">{children}</div>
}

const Login = () => {
  return (
    <Layout>
      <div
        className="
        column 
        is-half-desktop is-offset-one-quarter-desktop 
        is-three-fifths-tablet is-offset-one-fifth-tablet 
        has-background-dark has-text-grey-light is-size-3
        has-text-centered
      "
      >
        <div className="card">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae autem reprehenderit asperiores provident
            doloribus, sint numquam eaque obcaecati harum, minus labore fugit officia in assumenda debitis id quidem.
            Nulla, fugit!
          </p>
        </div>
      </div>
    </Layout>
  )
}
export default Login

import * as React from 'react'
import styles from './css/app.module.scss'
const App = () => {
  return (
    <>
      <section className="hero is-primary is-halfheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Halfheight title
            </h1>
            <h2 className="subtitle">
              Fullheight subtitle
            </h2>
          </div>
        </div>
      </section>
      <section>
        <div className="container has-margin-top-15">
          <h1 className="title">
            Bulma
          </h1>
          <p className={styles['title-x']}>!!!</p>
          <p className="subtitle">
            Modern CSS framework based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox">Flexbox</a>
          </p>

          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Input" />
            </div>
          </div>

          <div className="field">
            <p className="control">
              <span className="select">
                <select>
                  <option>Select dropdown</option>
                </select>
              </span>
            </p>
          </div>

          <div className="buttons">
            <a className="button is-primary">Primary</a>
            <a className="button is-link">Link</a>
          </div>
        </div>
      </section>
    </>
  )
}
export default App

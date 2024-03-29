import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function ErrorView() {
  return (
    <div>
      <h1 className="display-4">Ooops!</h1>
      <p className="lead">Страница не найдена!</p>
      <hr className="my-4" />
      <Link to="/" className="btn btn-primary btn-lg">
        <i className="fas fa-home mr-2" />
        На главную
      </Link>
    </div>
  )
}

export default memo(ErrorView)

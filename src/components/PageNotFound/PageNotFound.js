import React from "react";
import { Link, useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate()

  return (
    <div className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link
        onClick={() => navigate(-1)}
        className="page-not-found__link">
        Назад
      </Link>
    </div>
  )
}

export default PageNotFound
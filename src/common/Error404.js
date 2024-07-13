import React from 'react'
import { Link } from 'react-router-dom'

import errorImg from '../assets/images/error400-cover.png'
import boots from '../assets/css/bootstrap.min.css'
import icos from '../assets/css/icons.min.css'
import app from '../assets/css/app.min.css'

const errrInit = 'app'
if (errrInit === 'app') {
  var links = document.querySelectorAll('link[name="themeLoad"]')
  var linksArray = Array.prototype.slice.call(links)
  linksArray.forEach(function (child) {
    child.parentNode.removeChild(child)
  })
  document.getElementsByTagName('head')[0].innerHTML +=
    '<link name="be-app" href="' + boots + '" rel="stylesheet">'
  document.getElementsByTagName('head')[0].innerHTML +=
    '<link name="be-app" href="' + app + '" rel="stylesheet">'
  document.getElementsByTagName('head')[0].innerHTML +=
    '<link name="be-app" href="' + icos + '" rel="stylesheet">'
}

/**
 * @module common/Error404
 * @description A component that is rendered when there are not routes matching
 * @author Thulisha Reddy Technologies
 *
 * @component
 *
 * @example
 * <Error404	/>
 */

export const Error404 = () => {
  return (
    <div className="auth-page-wrapper pb-5 d-flex justify-content-center align-items-center min-vh-100">
      <div className="auth-page-content overflow-hidden p-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-4 text-center">
              <div className="error-500 position-relative">
                <img src={errorImg} alt className="img-fluid error-500-img error-img" />
                <h1 className="title text-muted">&nbsp;</h1>
              </div>
              <div>
                <h4>SORRY, PAGE NOT FOUND 😭</h4>
                <p>The page you are looking for not available!</p>
                <Link to="/" className="btn btn-secondary text-white">
                  <i className="mdi mdi-home me-1" /> Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

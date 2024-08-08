import React from 'react'
import { Helmet } from 'react-helmet'
import errorImg from '../assets/images/error400-cover.png'

/**
 * @module common/Error404
 * @description A component that renders a 404 error page when no routes match the requested URL.
 * @component
 *
 * @example
 * return <Error404 />
 */
export const Error404 = () => {
  /**
   * Render 404 error page
   * @function
   * @returns {React.Element} 404 error page is rendered when there is no matching route
   */
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/app.min.css" />
      </Helmet>
      <div className="trtui-auth-page-wrapper trtui-pb-5 trtui-d-flex trtui-justify-content-center trtui-align-items-center trtui-min-vh-100">
        <div className="trtui-auth-page-content trtui-overflow-hidden trtui-p-0">
          <div className="trtui-container-fluid">
            <div className="trtui-row trtui-justify-content-center">
              <div className="trtui-col-xl-4 trtui-text-center">
                <div className="trtui-error-500 trtui-position-relative">
                  <img
                    src={errorImg}
                    alt="Error 404"
                    className="trtui-img-fluid trtui-error-500-img trtui-error-img"
                  />
                  <h1 className="trtui-title trtui-text-muted">&nbsp;</h1>
                </div>
                <div>
                  <h4>SORRY, PAGE NOT FOUND 😭</h4>
                  <p>The page you are looking for is not available!</p>
                  <a href="/" className="trtui-btn trtui-btn-secondary trtui-text-white">
                    <i className="mdi mdi-home trtui-me-1" /> Back To Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

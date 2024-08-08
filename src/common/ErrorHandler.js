import React from 'react'
import PropTypes from 'prop-types'
import errorImg from '../assets/images/error.png'
import { Helmet } from 'react-helmet'
import axios from 'axios'

/**
 * @module common/ErrorHandler
 * @description A component that renders an error page when an error occurs.
 * It also logs the error to a remote logging service.
 *
 * @component
 * @example
 * return <ErrorHandler error={new Error("Something went wrong!")} />
 */
export const ErrorHandler = ({ error }) => {
  const customJSON = {
    msg: error.message,
    error: error,
  }

  const isLocalEnvironment =
    process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL

  React.useEffect(() => {
    axios.post(isLocalEnvironment + '/logger', customJSON)
  })
  try {
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
                <div className="trtui-col-xl-6 trtui-text-center">
                  <div className="trtui-error-500 trtui-position-relative">
                    <img
                      src={errorImg}
                      alt="error-500 image"
                      style={{ height: '85%' }}
                      className="trtui-img-fluid trtui-error-500-img trtui-error-img"
                    />
                    <br />
                    <h1 className="trtui-title trtui-text-muted">&nbsp;</h1>
                  </div>
                  <div>
                    <h4>Something Went Wrong!</h4>
                    <pre className="trtui-text-danger">{error.message}</pre>
                    <button
                      data-testid={'reload-button'}
                      onClick={() => window.location.reload()}
                      className="trtui-btn trtui-btn-secondary"
                    >
                      <i className="mdi mdi-refresh trtui-me-1" /> Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } catch (err) {
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
                <div className="trtui-col-xl-6 trtui-text-center">
                  <div className="trtui-error-500 trtui-position-relative">
                    <img
                      src={errorImg}
                      alt="error-500 image"
                      style={{ height: '85%' }}
                      className="trtui-img-fluid trtui-error-500-img trtui-error-img"
                    />
                    <br />
                    <h1 className="trtui-title trtui-text-muted">&nbsp;</h1>
                  </div>
                  <div>
                    <h4>Something Went Wrong!</h4>
                    <pre className="trtui-text-danger">{err.message}</pre>
                    <button
                      data-testid={'reload-button'}
                      onClick={() => window.location.reload()}
                      className="trtui-btn trtui-btn-secondary"
                    >
                      <i className="mdi mdi-refresh trtui-me-1" /> Try Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

ErrorHandler.propTypes = {
  /**
   * The error object to display.
   */
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    label: PropTypes.string,
    stacktrace: PropTypes.string,
  }).isRequired,
}

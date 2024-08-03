import React from 'react'
import PropTypes from 'prop-types'
import log from 'loglevel'
import remote from 'loglevel-plugin-remote'

import errorImg from '../assets/images/error.png'
import { Helmet } from 'react-helmet'

/**
 * @module common/ErrorHandler
 * @description A component that catches errors anywhere in their child component tree
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} props.error error object
 * @param {func} props.resetErrorBoundary resets the error boundry
 *
 * @example
 * <ErrorBoundary FallbackComponent={ErrorHandler}>
      ...children
   </ErrorBoundary>
 */

export const ErrorHandler = ({ error }) => {
  /**
   * customJSON function formats error message
   * @function customJSON
   * @description error message is formatted
   * @returns return a json
   */
  const customJSON = {
    msg: error.message,
    level: error.label,
    stacktrace: error.stacktrace,
  }

  /**
   * Post error to server
   * @function remote
   * @param {object} format error data in json format
   * @param {string} url api endpoint name
   */
  remote.apply(log, { format: customJSON, url: '/logger' })
  /**
   * Error handler page
   * @function ErrorHandler
   * @description render error page
   * @returns error page is rendered when something goes wrong
   */
  try {
    return (
      <>
        <Helmet>
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/css/app.min.css" />
        </Helmet>
        <div className="trtui-auth-page-wrapper trtui-pb-5 trtui-d-flex trtui-justify-content-center trtui-align-items-center trtui-min-vh-100">
          <div className="trtui-auth-page-content trtui-verflow-hidden trtui-p-0">
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
                    <br className="" />
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
          <div className="trtui-auth-page-content trtui-verflow-hidden trtui-p-0">
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
                    <br className="" />
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
  error: PropTypes.object.isRequired,
}

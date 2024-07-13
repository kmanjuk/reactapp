import React from 'react'
import PropTypes from 'prop-types'
import remote from 'loglevel-plugin-remote'

import log from 'loglevel'
import errorImg from '../assets/images/error.png'

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
  const customJSON = (log) => ({
    msg: error.message,
    level: error.label,
    stacktrace: error.stacktrace,
    log: log,
  })
  remote.apply(log, { format: customJSON, url: '/logger' })
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
                <h4>Something Went Wrong!</h4>
                <pre className="text-danger">{error.message}</pre>
                <button onClick={() => window.location.reload()} className="btn btn-secondary">
                  <i className="mdi mdi-refresh me-1" /> Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ErrorHandler.propTypes = {
  error: PropTypes.object.isRequired,
  resetErrorBoundary: PropTypes.func,
}

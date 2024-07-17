import React from 'react'
import PropTypes from 'prop-types'
import log from 'loglevel'
import remote from 'loglevel-plugin-remote'

import { unloadCSS } from '../lib/uiHelper'
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
  /**
   * On load function to clear css and load theme css conditionally
   * @function useEffect
   * @description Loads css files conditionally and removes unwanted css
   * @returns loads css
   */
  React.useEffect(() => {
    unloadCSS()
    return () => {
      if (error) {
        import('../assets/css/bootstrap.min.css')
        import('../assets/css/icons.min.css')
        import('../assets/css/app.min.css')
      }
    }
  }, [])

  /**
   * customJSON function formats error message
   * @function customJSON
   * @description error message is formatted
   * @returns return a json
   */
  const customJSON = (log) => ({
    msg: error.message,
    level: error.label,
    stacktrace: error.stacktrace,
    log: log,
  })

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
}

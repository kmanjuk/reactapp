import React from 'react'
import PropTypes from 'prop-types'

import { unloadCSS } from '../lib/uiHelper'
import errorImg from '../assets/images/error400-cover.png'

/**
 * @module common/Error404
 * @description A component that is rendered when there are not routes matching
 * @author Thulisha Reddy Technologies
 *
 * @component
 *
 * @example
 * <Error404 pageNotFound={true}	/>
 */

export const Error404 = ({ pageNotFound }) => {
  /**
   * On load function to clear css and load theme css conditionally
   * @function useEffect
   * @description Loads css files conditionally and removes unwanted css
   * @returns loads css
   */
  React.useEffect(() => {
    unloadCSS()
    return () => {
      if (pageNotFound === true) {
        import('../assets/css/bootstrap.min.css')
        import('../assets/css/icons.min.css')
        import('../assets/css/app.min.css')
      }
    }
  }, [])
  /**
   * Render 404 error page
   * @function Error404
   * @description render 404 error page
   * @returns 404 error page is rendered when there is no matching route
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
                <h4>SORRY, PAGE NOT FOUND 😭</h4>
                <p>The page you are looking for not available!</p>
                <a href="/" className="btn btn-secondary text-white">
                  <i className="mdi mdi-home me-1" /> Back To Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Error404.propTypes = {
  pageNotFound: PropTypes.bool,
}

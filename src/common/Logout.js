import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import logout from '../assets/images/logout.gif'

/**
 * Logout component handles the user logout process.
 *
 * @module Common/Logout
 * @description InputSelect component renders a select input field with optional autocomplete functionality.
 * @param {Object} props - Component props.
 * @param {string} props.isLocalEnvironment - URL string for local environment redirection.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const Logout = ({ isLocalEnvironment }) => {
  React.useEffect(() => {
    const redirectURL = window.location.origin
    localStorage.removeItem('authenticateSession')
    localStorage.removeItem('auth')
    localStorage.removeItem('loggedIn')

    window.open(isLocalEnvironment + '/auth/logout?url=' + redirectURL, '_self')
  })

  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="/css/bootstrap.min.css"
        />
        <link rel="preload" as="style" onLoad="this.rel='stylesheet'" href="/css/app.min.css" />
      </Helmet>
      <div className="trtui-auth-page-wrapper trtui-auth-bg-cover trtui-py-5 trtui-d-flex trtui-justify-content-center trtui-align-items-center trtui-min-vh-100">
        <div className="trtui-bg-overlay" />
        <div className="trtui-auth-page-content trtui-overflow-hidden trtui-pt-lg-5">
          <div className="trtui-container">
            <div className="trtui-row">
              <div className="trtui-col-lg-12">
                <div className="trtui-card trtui-overflow-hidden">
                  <div className="trtui-row trtui-justify-content-center trtui-g-0">
                    <div className="trtui-col-lg-6">
                      <div className="trtui-p-lg-5 trtui-p-4 trtui-text-center">
                        <img src={logout} alt="trt-logout" />
                        <div className="trtui-mt-4 trtui-pt-2">
                          <h5>Logged Out</h5>
                          <p className="trtui-text-muted">You have been successfully logged out.</p>
                          <div className="trtui-mt-4">
                            <a href="/" className="trtui-btn trtui-btn-secondary trtui-w-100">
                              Go To Home Page
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="trtui-footer">
          <div className="trtui-container">
            <div className="trtui-row">
              <div className="trtui-col-lg-12">
                <div className="trtui-text-center">
                  <p className="trtui-mb-0">
                    © © TRT. Developed by <strong>Thulisha Reddy Technologies</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Logout.propTypes = {
  /** URL string for local environment redirection */
  isLocalEnvironment: PropTypes.string.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

import loginBg from '../assets/images/login-bg.png'
import { Helmet } from 'react-helmet'

/**
 * LoginModal component renders a modal for user login with various authentication options.
 *
 * @module common/LoginModal
 * @description LoginModal component renders a modal for user login with various authentication options.
 * @param {Object} props - Component props.
 * @param {Object} props.sideLoginModalRef - Ref object for the modal to handle outside click events.
 * @param {boolean} props.toggleLoginModal - Boolean state to toggle the modal visibility.
 * @param {Object} props.envData - Environmental data for the app, containing feature flags for login methods.
 * @param {string} props.isLocalEnvironment - URL string for local environment redirection.
 * @param {Function} props.setToggleLoginModal - Function to set the state of toggleLoginModal.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const LoginModal = ({
  sideLoginModalRef,
  toggleLoginModal,
  envData,
  isLocalEnvironment,
  setToggleLoginModal,
}) => {
  const redirectURL = window.location.origin

  /**
   * Redirects to email login.
   */
  const emailLogin = () => {
    window.open(isLocalEnvironment + '/auth/login', '_self')
  }

  /**
   * Redirects to Google login.
   */
  const googleLogin = () => {
    window.open(isLocalEnvironment + '/auth/google?url=' + redirectURL, '_self')
  }

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/app.min.css" />
      </Helmet>
      <div
        className="trtui-modal trtui-fade trtui-show"
        id="addmemberModal"
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        style={{ display: 'block', backgroundColor: 'rgba(55,55,55,0.3)' }}
      >
        <div className="trtui-modal-dialog trtui-modal-dialog-centered" ref={sideLoginModalRef}>
          <div className="trtui-modal-content trtui-border-0 trtui-overflow-hidden">
            <div
              className="trtui-modal-body trtui-login-modal trtui-p-5"
              style={{
                backgroundImage: `url('${loginBg}')`,
              }}
            >
              <h5 className="trtui-text-white trtui-fs-20">Login</h5>
              <p className="trtui-text-white-50 trtui-mb-4">
                Don&apos;t have an account? Contact admin
              </p>
              <div className="trtui-vstack trtui-gap-2 trtui-justify-content-center">
                {envData.REACT_APP_GOOGLE_LOGIN && envData.REACT_APP_GOOGLE_LOGIN === '1' && (
                  <button className="trtui-btn trtui-btn-light" onClick={googleLogin}>
                    <i className="ri-google-fill trtui-align-bottom trtui-text-danger" /> Google
                  </button>
                )}
                {envData.REACT_APP_FACEBOOK_LOGIN && envData.REACT_APP_FACEBOOK_LOGIN === '1' && (
                  <button
                    className="trtui-btn trtui-btn-info"
                    onClick={() => setToggleLoginModal(!toggleLoginModal)}
                  >
                    <i className="ri-facebook-fill trtui-align-bottom" /> Facebook
                  </button>
                )}
                {envData.REACT_APP_LOCAL_LOGIN && envData.REACT_APP_LOCAL_LOGIN === '1' && (
                  <button className="trtui-btn trtui-btn-warning" onClick={emailLogin}>
                    <i className="ri-mail-fill trtui-align-bottom" /> Email
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

LoginModal.propTypes = {
  /** Ref object for the modal to handle outside click events */
  sideLoginModalRef: PropTypes.object.isRequired,
  /** Boolean state to toggle the modal visibility */
  toggleLoginModal: PropTypes.bool.isRequired,
  /** Environmental data for the app, containing feature flags for login methods */
  envData: PropTypes.object.isRequired,
  /** URL string for local environment redirection */
  isLocalEnvironment: PropTypes.string.isRequired,
  /** Function to set the state of toggleLoginModal */
  setToggleLoginModal: PropTypes.func.isRequired,
}

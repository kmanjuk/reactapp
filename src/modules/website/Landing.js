import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useOnClickOutside } from '../../lib/OnClickOutside'
import bgPattern from '../../assets/images/bg-pattern.png'
import { LoginModal } from '../../common/LoginModal'
import { Helmet } from 'react-helmet'

/**
 * Landing component displays the landing page with a login modal.
 * It shows different content based on the user's login status.
 *
 * @module website/Landing
 * @description Landing component displays the landing page with a login modal.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.envData - The environment data, including theme logo URL.
 * @param {string} props.isLocalEnvironment - Indicates if the environment is local.
 * @param {boolean} props.isLoggedIn - Indicates if the user is logged in.
 * @returns {JSX.Element} The rendered landing page component.
 */
export const Landing = ({ envData, isLocalEnvironment, isLoggedIn }) => {
  const [toggleLoginModal, setToggleLoginModal] = React.useState(false)
  const sideLoginModalRef = React.useRef()
  useOnClickOutside(sideLoginModalRef, () => setToggleLoginModal(false))

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/app.min.css" />
      </Helmet>
      <div className="trtui-layout-wrapper trtui-landing">
        <nav
          className="trtui-navbar trtui-navbar-expand-lg trtui-navbar-landing trtui-fixed-top"
          id="navbar"
        >
          <div className="trtui-container">
            <Link className="trtui-navbar-brand" to="/">
              <img
                src={envData.REACT_APP_THEME_LOGO}
                className="trtui-card-logo trtui-card-logo-dark"
                alt="logo dark"
              />
              <img
                src={envData.REACT_APP_THEME_LOGO}
                className="trtui-card-logo trtui-card-logo-light"
                alt="logo light"
              />
            </Link>

            <div className="trtui-collapse trtui-navbar-collapse" id="navbarSupportedContent">
              <ul
                className="trtui-navbar-nav trtui-mx-auto trtui-mt-2 trtui-mt-lg-0"
                id="navbar-example"
              ></ul>
              {isLoggedIn ? (
                <>
                  <Link to="/console/logout" className="trtui-btn-outline trtui-btn-primary">
                    Logout
                  </Link>
                </>
              ) : (
                <div className>
                  <button
                    onClick={() => setToggleLoginModal(true)}
                    className="trtui-btn trtui-btn-primary"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
        <section
          className="trtui-section trtui-pb-0 trtui-hero-section"
          style={{ height: '100vh' }}
          id="hero"
        >
          <div
            className="trtui-bg-overlay trtui-bg-overlay-pattern"
            style={{ backgroundImage: `url(${bgPattern})` }}
          />
          <div className="trtui-d-sm-block trtui-d-lg-none" style={{ paddingTop: '8rem' }}>
            &nbsp;
          </div>
          <div className="trtui-container" style={{ paddingBottom: '3rem' }}>
            <div className="trtui-row trtui-justify-content-center">
              <div className="trtui-col-lg-8 trtui-col-sm-10">
                <div className="trtui-text-center trtui-mt-lg-5 trtui-pt-5">
                  <h1 className="trtui-display-6 trtui-fw-semibold trtui-mb-3 trtui-lh-base">
                    Website Under <span className="trtui-text-secondary">Maintenance </span>
                  </h1>
                  <p className="trtui-lead trtui-text-muted trtui-lh-base">
                    This website is currently undergoing scheduled maintenance. We should be back
                    shortly.
                  </p>
                  {isLoggedIn && (
                    <div className="trtui-d-flex trtui-gap-2 trtui-justify-content-center trtui-mt-4">
                      <Link to="/console/logout" className="trtui-btn trtui-btn-primary">
                        Logout <i className="ri-arrow-right-line trtui-align-middle trtui-ms-1" />
                      </Link>
                      <Link to="console/my-profile" className="trtui-btn trtui-btn-soft-secondary">
                        My Profile <i className="ri-user-line trtui-align-middle trtui-ms-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
          <Link to="/" className="trtui-text-decoration-none">
            Contact Web Admin
          </Link>
        </div>
        {toggleLoginModal && (
          <LoginModal
            setToggleLoginModal={setToggleLoginModal}
            toggleLoginModal={toggleLoginModal}
            sideLoginModalRef={sideLoginModalRef}
            envData={envData}
            isLocalEnvironment={isLocalEnvironment}
          />
        )}
      </div>
    </>
  )
}

Landing.propTypes = {
  envData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isLoggedIn,
}

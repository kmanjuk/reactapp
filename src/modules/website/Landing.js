import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import bgPattern from '../../assets/images/bg-pattern.png'

/**
 * @module website/Landing
 * @description A component that is rendered when there are no routes or not page elements in home page
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} props.envData Environmental Variables
 *
 * @example
 * <Landing envData={envData}	/>
 */

export const Landing = ({ envData }) => {
  /**
   * On load function to clear css and load theme css conditionally
   * @function useEffect
   * @description Loads css files conditionally and removes unwanted css
   * @returns loads css
   */
  React.useEffect(() => {
    import('../../assets/css/bootstrap.min.css')
    import('../../assets/css/icons.min.css')
    import('../../assets/css/app.min.css')
  }, [])

  /**
   * Render landing page
   * @function Landing
   * @description render landing page
   * @returns landing page is rendered when there are no pages created or no page elements in default home page
   */
  return (
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
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }}>
        <Link to="/" className="trtui-text-decoration-none">
          Contact Web Admin
        </Link>
      </div>
    </div>
  )
}

Landing.propTypes = {
  envData: PropTypes.object.isRequired,
}

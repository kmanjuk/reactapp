import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { AppLayout } from './appLayout/AppLayout'
import { LoginModal } from '../common/LoginModal'
import { Notifications } from '../common/notifications/Notifications'

/**
 * The ModuleBuilder component serves as a wrapper for the application's layout,
 * handling the display of notifications, login modal, and layout components.
 * It integrates environment data, authentication details, and route information
 * into the main application layout.
 *
 * @module ModuleBuilder
 * @description The ModuleBuilder component serves as a wrapper for the application's layout,
 * handling the display of notifications, login modal, and layout components.
 * It integrates environment data, authentication details, and route information
 * into the main application layout.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.envData - Environment-specific data such as theme and logo URLs.
 * @param {Function} props.setToggleLoginModal - Function to toggle the login modal visibility.
 * @param {boolean} props.toggleLoginModal - State indicating whether the login modal is visible.
 * @param {Object} props.sideLoginModalRef - Ref object for the login modal component.
 * @param {string} props.isLocalEnvironment - Indicator of whether the environment is local.
 * @param {Object} props.authDetails - Authentication details of the user.
 * @param {Object} props.appDataParsed - Parsed application data used for rendering components.
 * @param {Object} props.routeData - Data related to the current route.
 * @returns {JSX.Element} The rendered ModuleBuilder component.
 */
export const ModuleBuilder = ({
  envData,
  setToggleLoginModal,
  toggleLoginModal,
  sideLoginModalRef,
  isLocalEnvironment,
  authDetails,
  appDataParsed,
  routeData,
}) => {
  return (
    <div id="layout-wrapper">
      <Helmet>
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="/css/bootstrap.min.css"
        />
        <link rel="preload" as="style" onLoad="this.rel='stylesheet'" href="/css/app.min.css" />
      </Helmet>
      <Notifications />
      <AppLayout
        setToggleLoginModal={setToggleLoginModal}
        toggleLoginModal={toggleLoginModal}
        sideLoginModalRef={sideLoginModalRef}
        envData={envData}
        isLocalEnvironment={isLocalEnvironment}
        authDetails={authDetails}
        routeData={routeData}
        appDataParsed={appDataParsed}
      />
      {toggleLoginModal && (
        <LoginModal
          setToggleLoginModal={setToggleLoginModal}
          toggleLoginModal={toggleLoginModal}
          sideLoginModalRef={sideLoginModalRef}
          envData={envData}
          isLocalEnvironment={isLocalEnvironment}
          appDataParsed={appDataParsed}
        />
      )}
      <div className="trtui-vertical-overlay" />
    </div>
  )
}

ModuleBuilder.propTypes = {
  envData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  setToggleLoginModal: PropTypes.func.isRequired,
  toggleLoginModal: PropTypes.bool.isRequired,
  sideLoginModalRef: PropTypes.object.isRequired,
  authDetails: PropTypes.object.isRequired,
  appDataParsed: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
}

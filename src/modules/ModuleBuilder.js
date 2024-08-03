import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import { AppLayout } from './appLayout/AppLayout'
import { LoginModal } from '../common/LoginModal'
import { Notifications } from '../common/notifications/Notifications'

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
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/app.min.css" />
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

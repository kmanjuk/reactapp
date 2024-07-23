import React from 'react'
import PropTypes from 'prop-types'

import { AppLayout } from './appLayout/AppLayout'
import { unloadCSS } from '../lib/uiHelper'
import { LoginModal } from '../common/LoginModal'

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
  React.useEffect(() => {
    unloadCSS()
    return () => {
      import('../assets/css/bootstrap.min.css')
      import('../assets/css/icons.min.css')
      import('../assets/css/app.min.css')
      import('../assets/css/custom.min.css')
    }
  }, [])
  return (
    <div id="layout-wrapper">
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

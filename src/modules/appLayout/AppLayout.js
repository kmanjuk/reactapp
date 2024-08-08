import React from 'react'
import PropTypes from 'prop-types'

import { AppLayoutHeader } from './AppLayoutHeader'
import { AppLayoutMenubar } from './AppLayoutMenubar'
import { AppLayoutFooter } from './AppLayoutFooter'
import { useOnClickOutside } from '../../lib/OnClickOutside'
import { useGetQuery } from '../../lib/api/get'
import { isValidJsonString } from '../../lib/uiHelper'

import { Profile } from '../profile/Profile'
import { AppLayoutModuleNotFound } from './AppLayoutModuleNotFound'

/**
 * AppLayout component
 * @module appLayout/AppLayout
 * @description AppLayout component
 * @author Thulisha Reddy Technologies
 * @param {object} props - Component props
 * @param {object} props.envData - Environment data
 * @param {function} props.setToggleLoginModal - Function to toggle login modal
 * @param {object} props.authDetails - Authentication details
 * @param {object} props.routeData - Route data
 * @param {string} props.isLocalEnvironment - Flag for local environment
 * @returns {JSX.Element} The rendered component
 */
export const AppLayout = ({
  envData,
  setToggleLoginModal,
  authDetails,
  routeData,
  isLocalEnvironment,
  appDataParsed,
}) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const sideMenuRef = React.useRef()
  useOnClickOutside(sideMenuRef, () => setToggleMenu(false))

  const moduleSchema = isValidJsonString(routeData)
    ? routeData.apiEndPointSchema
    : JSON.parse(JSON.stringify(routeData)).apiEndPointSchema
  const getData = useGetQuery({
    apiURL: envData.REACT_APP_API_URL_WEB,
    apiEndpoint: moduleSchema.api,
    params: moduleSchema.urlParams,
    enabled: !!moduleSchema.api,
  })

  const Modules = {
    Profile: Profile,
  }

  const ModuleName = Modules[routeData.component]

  return (
    <>
      <AppLayoutHeader
        envData={envData}
        authDetails={authDetails}
        setToggleLoginModal={setToggleLoginModal}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        sideMenuRef={sideMenuRef}
      />
      <AppLayoutMenubar
        envData={envData}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        sideMenuRef={sideMenuRef}
        authDetails={authDetails}
        routesData={appDataParsed.routesData}
      />
      <div className="trtui-main-content">
        <div className="trtui-page-content" style={{ minHeight: '100vh' }}>
          <div className="trtui-container-fluid" key={getData}>
            {getData.isLoading ? (
              <div>
                <div
                  id="status"
                  className="trtui-align-items-center trtui-d-none trtui-d-md-block trtui-justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    margin: '-20px 0 0 6.4rem',
                  }}
                >
                  <div
                    className="trtui-spinner-border trtui-text-primary trtui-avatar-sm"
                    role="status"
                  >
                    <span className="trtui-visually-hidden">Loading...</span>
                  </div>
                </div>
                <div
                  id="status"
                  className="trtui-align-items-center trtui-d-block trtui-d-md-none trtui-justify-content-center"
                  style={{
                    width: '40px',
                    height: '40px',
                    position: 'absolute',
                    left: '20%',
                    top: '50%',
                    margin: '-20px 0 0 6.4rem',
                  }}
                >
                  <div
                    className="trtui-spinner-border trtui-text-primary trtui-avatar-sm"
                    role="status"
                  >
                    <span className="trtui-visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            ) : ModuleName ? (
              <ModuleName
                authDetails={authDetails}
                routeData={routeData}
                isLocalEnvironment={isLocalEnvironment}
                envData={envData}
              />
            ) : (
              <AppLayoutModuleNotFound />
            )}
          </div>
        </div>
      </div>
      <AppLayoutFooter />
    </>
  )
}

AppLayout.propTypes = {
  envData: PropTypes.object.isRequired,
  setToggleLoginModal: PropTypes.func.isRequired,
  authDetails: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  appDataParsed: PropTypes.object.isRequired,
}

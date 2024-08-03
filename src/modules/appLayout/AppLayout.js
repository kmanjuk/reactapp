import React from 'react'
import PropTypes from 'prop-types'

import { AppLayoutHeader } from './AppLayoutHeader'
import { AppLayoutMenubar } from './AppLayoutMenubar'
import { AppLayoutFooter } from './AppLayoutFooter'
import { useOnClickOutside } from '../../lib/OnClickOutside'
import { useGetQuery } from '../../lib/api/get'
import { isValidJsonString } from '../../lib/uiHelper'

import { Profile } from '../profile/Profile'

/**
 * @module AppLayout
 * @description AppLayout renders layout for backend app
 *
 * @component
 * @param {object} envData Environmental Variables
 * @param {func} setToggleLoginModal Toggle login modal
 * @param {object} authDetails Contains authentication details
 * @param {object} routeData Details of module
 *
 * @example
 * <AppLayout setToggleLoginModal={setToggleLoginModal}
        toggleLoginModal={toggleLoginModal}
        sideLoginModalRef={sideLoginModalRef}
        envData={envData}
        isLocalEnvironment={isLocalEnvironment}
        authDetails={authDetails}
        routeData={routeData} />
 * @author Thulisha Reddy Technologies
 */

export const AppLayout = ({
  envData,
  setToggleLoginModal,
  authDetails,
  routeData,
  isLocalEnvironment,
}) => {
  /**
   * @callback ToggleMenuSetter
   * @param {ToggleMenuSetter} ref
   * @returns {boolean}
   */
  const [toggleMenu, setToggleMenu] = React.useState(false)

  /**
   * @callback SideMenuRefSetter
   * @param {SideMenuRefSetter} ref
   * @returns {boolean}
   */
  const sideMenuRef = React.useRef()
  useOnClickOutside(sideMenuRef, () => setToggleMenu(false))

  /**
   * @function isValidJsonString
   * @param {object} routeData
   * @returns {object}
   */

  const moduleSchema = isValidJsonString(routeData)
    ? routeData.apiEndPointSchema
    : JSON.parse(JSON.stringify(routeData)).apiEndPointSchema

  /**
   * Get appData by making api call
   * @function useGetQuery
   * @param {object} { apiURL: envData.REACT_APP_API_URL_WEB,
    apiEndpoint: moduleSchema.api,
    params: moduleSchema.urlParams,
    enabled: moduleSchema.api ? true : false, }
   * @returns {object} all required parameters
   */
  const getData = useGetQuery({
    apiURL: envData.REACT_APP_API_URL_WEB,
    apiEndpoint: moduleSchema.api,
    params: moduleSchema.urlParams,
    enabled: moduleSchema.api ? true : false,
  })

  /**
   * Loading screen if api is being fetched
   * @function Loading
   * @description renders loading screen while fetching appData
   * @param {boolean} getData.isLoading true render loading screen
   * @returns loading screen
   */
  if (getData.isLoading) {
    return (
      <>
        <div
          className="spinner-border"
          role="status"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            color: envData.REACT_APP_THEME_COLOR,
          }}
        >
          <span className="sr-only">Loading...</span>
        </div>
        <span className="sr-only">Loading...</span>
      </>
    )
  }

  const Modules = {
    Profile: Profile,
  }

  let ModuleName = Modules[routeData.component]
  /**
   * Render app layout
   * @function return
   * @description renders application layout
   * @returns app layout
   */
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
      />
      <div className="trtui-main-content">
        <div className="trtui-page-content" style={{ minHeight: '100vh' }}>
          <div className="trtui-container-fluid">
            <ModuleName
              authDetails={authDetails}
              routeData={routeData}
              isLocalEnvironment={isLocalEnvironment}
              envData={envData}
            />
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
}

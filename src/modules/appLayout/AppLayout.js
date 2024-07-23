import React from 'react'
import PropTypes from 'prop-types'

import { AppLayoutHeader } from './AppLayoutHeader'
import { AppLayoutMenubar } from './AppLayoutMenubar'
import { AppLayoutFooter } from './AppLayoutFooter'
import { useOnClickOutside } from '../../lib/OnClickOutside'
import { useGetQuery } from '../../lib/api/get'
import { isValidJsonString } from '../../lib/uiHelper'

export const AppLayout = ({ envData, setToggleLoginModal, authDetails, routeData }) => {
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const sideMenuRef = React.useRef()
  useOnClickOutside(sideMenuRef, () => setToggleMenu(false))

  const moduleSchema = isValidJsonString(routeData)
    ? routeData.apiEndPointSchema
    : JSON.parse(JSON.stringify(routeData)).apiEndPointSchema

  console.log(moduleSchema)
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
      <AppLayoutFooter />
    </>
  )
}

AppLayout.propTypes = {
  envData: PropTypes.object.isRequired,
  setToggleLoginModal: PropTypes.func.isRequired,
  authDetails: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
}

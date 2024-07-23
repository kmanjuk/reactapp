import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { isValidJsonString } from './lib/uiHelper'
import { useOnClickOutside } from './lib/OnClickOutside'
import { Website } from './modules/website/Website'
import { Landing } from './modules/website/Landing'
import { Error404 } from './common/Error404'
import { Logout } from './common/Logout'
import { useGetQuery } from './lib/api/get'
import { appDataProcessor } from './lib/appDataProcessor'
import { useAuthStore } from './store/auth'
import { ModuleBuilder } from './modules/ModuleBuilder'
import { getUser } from './lib/authentication'

/**
 * @module App
 * @description App makes an api call to get all routes and render them.
 *
 * @component
 * @param {object} props.envData Environmental Variables
 *
 * @example
 * <App envData={envData} />
 * @author Thulisha Reddy Technologies
 */

function App({ envData, isLocalEnvironment }) {
  /**
   * @callback LoginModalToggleStateSetter
   * @param {LoginModalToggleState} state
   * @returns {void}
   */
  const [toggleLoginModal, setToggleLoginModal] = React.useState(false)

  /**
   * @callback SideLoginRefSetter
   * @param {SideLoginRefSetter} ref
   * @returns {boolean}
   */
  const sideLoginModalRef = React.useRef()
  useOnClickOutside(sideLoginModalRef, () => setToggleLoginModal(false))

  //api call to get appData (appData has routes and app data)
  /**
   * Get appData by making api call
   * @function useGetQuery
   * @param {object} { apiURL: envData.REACT_APP_API_URL_WEB, apiEndpoint: 'appData' }
   * @returns {object} all required parameters
   */
  const getAppData = useGetQuery({ apiURL: envData.REACT_APP_API_URL_WEB, apiEndpoint: 'appData' })

  /**
   * Get authDetails from auth store
   * @function authDetails
   * @returns {object} auth details if logged in
   */
  const authDetails = useAuthStore((state) => state)
  const { setAuthentication } = useAuthStore()

  /**
   * getUser function checks if user is authorized
   * @function getUser
   * @param {string} isLocalEnvironment
   * @param {func} setAuthentication
   * @param {string} authDetails
   * @returns {object} sets session if user is authorized
   */
  React.useEffect(() => {
    getUser({ isLocalEnvironment, setAuthentication, authDetails })
  }, [])

  //render loading screen while appData is fetched
  /**
   * Loading screen if api is being fetched
   * @function Loading
   * @description renders loading screen while fetching appData
   * @param {boolean} getAppData.isLoading true render loading screen
   * @returns loading screen
   */
  if (getAppData.isLoading) {
    return (
      <div id="preloader" style={{ opacity: '0', visibility: 'hidden' }}>
        <div id="status">
          <div className="trtui-spinner-border trtui-text-primary trtui-avatar-sm" role="status">
            <span className="trtui-visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
  //filter getAppData to seperate routes, site and seo data
  const appDataParsed = appDataProcessor(getAppData)

  const isLoggedIn = isValidJsonString(authDetails)
    ? authDetails.loggedIn
    : JSON.parse(JSON.stringify(authDetails)).loggedIn || false

  /**
   * Render routes
   * @function Routes
   * @description render routes
   * @returns Routes
   */
  return (
    <BrowserRouter>
      <Routes>
        {appDataParsed.routesData.length > 0 ? (
          appDataParsed.routesData.map((route, routeIndex) => (
            //public website routes are rendered
            <Route
              path={route.path}
              key={`${routeIndex}${route.name}`}
              exact
              element={
                <Website
                  key={route.path}
                  routeData={route}
                  appDataParsed={appDataParsed}
                  envData={envData}
                  isLocalEnvironment={isLocalEnvironment}
                  authDetails={authDetails}
                  setToggleLoginModal={setToggleLoginModal}
                  toggleLoginModal={toggleLoginModal}
                  sideLoginModalRef={sideLoginModalRef}
                />
              }
            />
          ))
        ) : (
          //route to landing page when home page is not available
          <Route
            path="/"
            exact
            element={
              <Landing
                envData={envData}
                isLocalEnvironment={isLocalEnvironment}
                authDetails={authDetails}
              />
            }
          />
        )}
        {/* backend module routes are rendered if user is logged in */}
        {isLoggedIn &&
          appDataParsed.routesData.length > 0 &&
          appDataParsed.routesData.map((mod, modInd) => (
            <Route
              key={`${modInd}${mod.component}${mod.name}`}
              path={`console/${mod.path}`}
              element={
                <ModuleBuilder
                  routeData={mod}
                  appDataParsed={appDataParsed}
                  envData={envData}
                  isLocalEnvironment={isLocalEnvironment}
                  authDetails={authDetails}
                  setToggleLoginModal={setToggleLoginModal}
                  toggleLoginModal={toggleLoginModal}
                  sideLoginModalRef={sideLoginModalRef}
                />
              }
            />
          ))}
        <Route
          key="logout"
          path="console/logout"
          element={<Logout isLocalEnvironment={isLocalEnvironment} />}
        />
        <Route key="not-found" path="*" element={<Error404 pageNotFound={true} />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

App.propTypes = {
  envData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}

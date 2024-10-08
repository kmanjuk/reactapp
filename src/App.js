import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useOnClickOutside } from './lib/OnClickOutside'
import { Loading } from './common/Loading'
import { Website } from './modules/website/Website'
import { Landing } from './modules/website/Landing'
import { Error404 } from './common/Error404'
import { Logout } from './common/Logout'
import { useGetQuery } from './lib/api/get'
import { useAuthStore } from './store/auth'
import { ModuleBuilder } from './modules/ModuleBuilder'
import { getUser } from './lib/authentication'
import { CookieConsentComp } from './common/CookieConsent'

/**
 * Main application component that handles routing and authentication.
 * @module App
 * @description Main application component that handles routing and authentication.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.envData - Environment-specific data (e.g., API URL, logo).
 * @param {string} props.isLocalEnvironment - Flag indicating if the environment is local.
 * @returns {JSX.Element} The rendered component.
 */
function App({ envData, isLocalEnvironment }) {
  const [toggleLoginModal, setToggleLoginModal] = React.useState(false)
  const sideLoginModalRef = React.useRef()
  useOnClickOutside(sideLoginModalRef, () => setToggleLoginModal(false))

  const getAppData = useGetQuery({ apiURL: isLocalEnvironment, apiEndpoint: 'appData' })
  const authDetails = useAuthStore((state) => state)
  const { setAuthentication } = useAuthStore()

  React.useEffect(() => {
    getUser({ isLocalEnvironment, setAuthentication, authDetails })
  }, [isLocalEnvironment, setAuthentication, authDetails])

  if (getAppData.isLoading) {
    return (
      <div id="layout-wrapper" data-testid="appLoading">
        <Loading envData={envData} />
        <div className="trtui-vertical-overlay" />
      </div>
    )
  }

  const appDataParsed = getAppData.data

  return (
    <>
      <BrowserRouter>
        <Routes>
          {appDataParsed.routesData.length > 0 ? (
            appDataParsed.routesData.map((route, routeIndex) => (
              // Public website routes are rendered
              <Route
                path={route.routePath}
                key={`${routeIndex}${route.pageName}`}
                exact
                element={
                  <Website
                    key={route.routePath}
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
            // Route to landing page when home page is not available
            <Route
              path="/"
              exact
              element={
                <Landing
                  envData={envData}
                  isLocalEnvironment={isLocalEnvironment}
                  isLoggedIn={authDetails.loggedIn}
                />
              }
            />
          )}
          {/* Backend module routes are rendered if user is logged in */}
          {authDetails.loggedIn &&
            appDataParsed.routesData.length > 0 &&
            appDataParsed.routesData.map((mod, modInd) => (
              <Route
                key={`${modInd}${mod.component}${mod.pageName}`}
                path={`console/${mod.routePath}`}
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
      {/* {appDataParsed.appSettings['appSettings-cookieConsentRequired'] && (
        <CookieConsentComp appSettings={appDataParsed.appSettings} />
      )} */}
      <CookieConsentComp />
    </>
  )
}

export default App

App.propTypes = {
  envData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}

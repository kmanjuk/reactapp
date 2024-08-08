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
import { appDataProcessor } from './lib/appDataProcessor'
import { useAuthStore } from './store/auth'
import { ModuleBuilder } from './modules/ModuleBuilder'
import { getUser } from './lib/authentication'

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

  const getAppData = useGetQuery({ apiURL: envData.REACT_APP_API_URL_WEB, apiEndpoint: 'appData' })
  const authDetails = useAuthStore((state) => state)
  const { setAuthentication } = useAuthStore()

  React.useEffect(() => {
    getUser({ isLocalEnvironment, setAuthentication, authDetails })
  }, [isLocalEnvironment, setAuthentication, authDetails])

  if (getAppData.isLoading) {
    return (
      <div id="layout-wrapper">
        <Loading envData={envData} />
        <div className="trtui-vertical-overlay" />
      </div>
    )
  }

  // Filter getAppData to separate routes, site, and SEO data
  const appDataParsed = appDataProcessor(getAppData)

  return (
    <BrowserRouter>
      <Routes>
        {appDataParsed.routesData.length > 0 ? (
          appDataParsed.routesData.map((route, routeIndex) => (
            // Public website routes are rendered
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

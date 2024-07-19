import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useGetQuery } from './lib/api/get'
import { appDataProcessor } from './lib/appDataProcessor'
import { Website } from './modules/website/Website'
import { Error404 } from './common/Error404'
import { Landing } from './modules/website/Landing'
import { useAuthStore } from './store/auth'
import * as authentication from './lib/authentication'

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

  React.useEffect(() => {
    authentication.getUser({ isLocalEnvironment, setAuthentication })
  })

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
                authDetails={authDetails}
                isLocalEnvironment={isLocalEnvironment}
              />
            }
          />
        )}
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

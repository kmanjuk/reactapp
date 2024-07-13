import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useGetQuery } from './lib/api/get'
import { appDataProcessor } from './lib/appDataProcessor'
import { Website } from './modules/website/website'
import { Error404 } from './common/Error404'

//importing css files for backend page layout
// import './assets/css/b.min.css'
// import './assets/css/icons.min.css'
// import './assets/css/app.min.css'
// import './assets/css/custom.min.css'

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
                />
              }
            />
          ))
        ) : (
          //route to landing page when home page is not available or doesn't have page elements on home page
          <Route path="/" exact element={<div>Landing</div>} />
        )}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App

App.propTypes = {
  envData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}

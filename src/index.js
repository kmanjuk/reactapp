import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { AppProvider } from './AppProvider'
import { ErrorHandler } from './common/ErrorHandler'

/**
 * @file CRM application framework.
 *
 * @version 0.1
 * @author Thulisha Reddy Technologies
 * @copyright 2024
 *
 */

/**
 * @module Index
 * @description This is the main module of the application.
 *
 * @author Thulisha Reddy Technologies
 */

/**
 * @param root
 * @description React root element.
 * ReactDOM.createRoot(document.getElementById('root'))
 */
const root = ReactDOM.createRoot(document.getElementById('root'))

//checking if environment is local dev environment or production build
/**
 * isLocalEnvironment
 * @param {boolean}
 * Assign environment variable REACT_APP_API_URL_LOCAL if dev environment or use serve
 */
const isLocalEnvironment =
  process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL

//get environmental variables by making api call to ccm server
/**
 * Get environment variables from server
 * @function axios
 * @description root is rendered conditionally based on the response from api response
 * @param {string} isLocalEnvironment + '/envData' server path to make api request
 * @returns {object} All environmental variables
 */
let envD = {},
  error
await (async () => {
  envD = await axios.get(isLocalEnvironment + '/envData').catch((err) => {
    error = err
  })
})()
if (envD?.data) {
  /**
   * Set response from api request
   * const envData = resp.data || {}
   */
  const envData = envD.data || {}

  //Prepare dynamic manifest file for PWA, using parameters from environment variables
  /**
   * Set app manifest objet
   * const manifestString = JSON.parse(envData.REACT_APP_MANIFEST)
   */
  const manifestString = JSON.parse(envData.REACT_APP_MANIFEST)
  manifestString['start_url'] = window.location.origin

  /**
   * Stringify manifest object
   * const manifestStringified = JSON.stringify(manifestString)
   */
  const manifestStringified = JSON.stringify(manifestString)

  //Creating manifest blob for injecting into html head
  /**
   * Convert stringified manifest object to blob
   */
  const manifestBlob = new Blob([manifestStringified], {
    type: 'application/json',
  })
  const manifestURL = URL.createObjectURL(manifestBlob)

  //Mapping manifest file to register PWA
  /**
   * Map converted blob to register PWA
   */
  const link = document.getElementById('appManifest')
  link.setAttribute('href', manifestURL)

  //Assign favicon to html using environmental variable
  /**
   * Assign favicon to html page
   */
  const favLink = document.getElementById('faviconLink')
  favLink.setAttribute('href', envData.REACT_APP_THEME_FAVICON)

  //Assign default site title to html
  /**
   * Assign page title to html
   */
  const siteTitle = document.getElementById('siteTitle')
  siteTitle.innerHTML = envData.REACT_APP_PAGE_TITLE

  //Assign theme color to be displayed on mobile browsers
  /**
   * Define theme color to html page
   */
  const themeColor = document.getElementById('themeColor')
  themeColor.setAttribute('content', envData.REACT_APP_THEME_COLOR)
  /**
   * Render root element
   */
  root.render(
    <>
      <ErrorBoundary FallbackComponent={ErrorHandler}>
        <AppProvider>
          <App envData={envData} isLocalEnvironment={isLocalEnvironment} />
        </AppProvider>
      </ErrorBoundary>
    </>,
  )

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://cra.link/PWA
  serviceWorkerRegistration.unregister()

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  /**
   * Call reportWebVitals function
   */
  reportWebVitals()
} else {
  /**
   * Render root element with error
   */
  root.render(
    <ErrorHandler error={{ message: error.message, stacktrace: error.stack, level: 'error' }} />,
  )
}

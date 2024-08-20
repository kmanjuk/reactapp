import React from 'react'
import pluginConfig from '../lib/cookieConsentConfig'
import 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

/**
 * CookieConsentComp component initializes and runs the cookie consent plugin.
 *
 * This component integrates the Vanilla Cookie Consent plugin into the React application.
 * It ensures the plugin is initialized only once, even with React's strict mode in development,
 * which causes `useEffect` to run twice in React 18+.
 *
 * @component
 * @returns {null} This component does not render any visible UI elements.
 *
 * @example
 * return (
 *   <CookieConsentComp />
 * );
 *
 * Functional React component for initializing the cookie consent plugin.
 *
 * This component uses the `useEffect` hook to ensure the Vanilla Cookie Consent plugin
 * is initialized only once during the component's lifecycle.
 *
 * @returns {null} The component does not render anything in the DOM.
 */

export const CookieConsentComp = () => {
  React.useEffect(() => {
    /**
     * useEffect is executed twice (React 18+),
     * make sure the plugin is initialized and executed once
     */
    if (!document.getElementById('cc--main')) {
      window.CC = window.initCookieConsent()
      window.CC.run(pluginConfig)
    }
  }, [])

  return null
}

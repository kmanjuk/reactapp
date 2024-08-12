import React from 'react'
import pluginConfig from '../lib/cookieConsentConfig'
import 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

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

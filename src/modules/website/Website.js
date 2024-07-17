import React from 'react'
import PropTypes from 'prop-types'

import { useGetPageCall } from '../../lib/api/get'
import { useGetSPAPageCall } from '../../lib/api/get'
import * as Web from './webcomps'
import { mainUILoad, unloadCSS } from '../../lib/uiHelper'

/**
 * @module modules/Website
 * @description Website renders public webpages
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} props.envData Environmental Variables
 * @param {object} props.appDataParsed Routes, Site and SEO data
 * @param {object} props.routeData Current route details
 * @param {object} props.isLocalEnvironment environment api calls to be made
 *
 * @example
 * <Website routeData={route} appDataParsed={appDataParsed} envData={envData} />
 */

export const Website = ({ envData, appDataParsed, routeData, isLocalEnvironment }) => {
  /**
   * On load function to clear css and load theme css conditionally
   * @function useEffect
   * @description Loads css files conditionally and removes unwanted css
   * @returns loads css
   */
  React.useEffect(() => {
    unloadCSS()
    return () => {
      var defaultTheme = appDataParsed.webSettings['webSettings-defaultTheme'] || 'T1'
      if (defaultTheme === 'T1') {
        import('../../assets/themes/t1.css')
      }
    }
  }, [])

  /**
   * mainLoad function assigns theme colors and favicon
   * @function mainUILoad
   * @description Theme colors and favicons are loaded to the page from env
   * @returns loads theme colors and favicon
   */
  mainUILoad(
    envData.REACT_APP_PRIMARY_COLOR,
    envData.REACT_APP_SECONDARY_COLOR,
    envData.REACT_APP_THEME_FAVICON,
  )

  /**
   * Get pageData by making api call
   * @function useGetPageCall
   * @param {string} isLocalEnvironment api url
   * @param {string} apiEndpoint api endpoint name
   * @param {string} pageId api url
   * @param {string} name page name
   * @param {boolean} enabled if true makes api call else doesn't
   * @returns {object} returns pageData
   */
  const getPage = useGetPageCall({
    apiURL: isLocalEnvironment,
    apiEndpoint: 'pageData',
    id: routeData.pageId,
    pageName: routeData.name,
    enabled: true,
  })

  /**
   * Get pageData by making api call
   * @function useGetSPAPageCall
   * @param {string} isLocalEnvironment api url
   * @param {string} apiEndpoint api endpoint name
   * @param {string} homePage page name
   * @param {boolean} enabled if true makes api call else doesn't
   * @returns {object} returns SPA pageData
   */
  const getSPAPage = useGetSPAPageCall({
    apiURL: isLocalEnvironment,
    apiEndpoint: 'spaPageData',
    homePage: appDataParsed.webSettings['webSettings-defaultSPAPage'],
    enabled: true,
  })

  /**
   * Loading screen if api is being fetched
   * @function Loading
   * @description renders loading screen while fetching appData
   * @param {boolean} getPage.isLoading true render loading screen
   * @returns loading screen
   */
  if (getPage.isLoading || getSPAPage.isLoading) {
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

  /**
   * Render website pages
   * @function Website
   * @description render webpage
   * @returns html webpage is rendered
   */

  let TagName

  return (
    <>
      {routeData.isSPA &&
        JSON.parse(getSPAPage.data?.formData.pageData).length > 0 &&
        JSON.parse(getSPAPage.data?.formData.pageData).map(
          (row) =>
            row.childItems.length > 0 &&
            row.childItems.map(
              (col) =>
                col.childItems.length > 0 &&
                col.childItems
                  .sort((a, b) => a.pageElementDisplayOrder - b.pageElementDisplayOrder)
                  .map(
                    (comp, compIndex) =>
                      comp.className.className ===
                        appDataParsed.webSettings['webSettings-navbarComponent'] && (
                        <div key={compIndex}>
                          {(TagName = Web[comp.className.className])}
                          {TagName ? (
                            <TagName pageData={comp} envData={envData} />
                          ) : (
                            <div>Something Went Wrong!</div>
                          )}
                        </div>
                      ),
                  ),
            ),
        )}
      {JSON.parse(getPage.data?.formData.pageData).length > 0 &&
        JSON.parse(getPage.data?.formData.pageData).map(
          (row) =>
            row.childItems.length > 0 &&
            row.childItems.map(
              (col) =>
                col.childItems.length > 0 &&
                col.childItems
                  .sort((a, b) => a.pageElementDisplayOrder - b.pageElementDisplayOrder)
                  .map((comp, compIndex) => (
                    <div key={compIndex}>
                      {(TagName = Web[comp.className.className])}
                      {TagName ? (
                        <TagName pageData={comp} envData={envData} />
                      ) : (
                        <div>Something Went Wrong!</div>
                      )}
                    </div>
                  )),
            ),
        )}
      {routeData.isSPA &&
        JSON.parse(getSPAPage.data?.formData.pageData).length > 0 &&
        JSON.parse(getSPAPage.data?.formData.pageData).map(
          (row) =>
            row.childItems.length > 0 &&
            row.childItems.map(
              (col) =>
                col.childItems.length > 0 &&
                col.childItems
                  .sort((a, b) => a.pageElementDisplayOrder - b.pageElementDisplayOrder)
                  .map(
                    (comp, compIndex) =>
                      comp.className.className ===
                        appDataParsed.webSettings['webSettings-footerComponent'] && (
                        <div key={compIndex}>
                          {(TagName = Web[comp.className.className])}
                          {TagName ? (
                            <TagName pageData={comp} envData={envData} />
                          ) : (
                            <div>Something Went Wrong!</div>
                          )}
                        </div>
                      ),
                  ),
            ),
        )}
    </>
  )
}

Website.propTypes = {
  envData: PropTypes.object.isRequired,
  appDataParsed: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
}

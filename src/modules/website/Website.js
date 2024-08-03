import React from 'react'
import PropTypes from 'prop-types'

import { useGetPageCall } from '../../lib/api/get'
import { useGetSPAPageCall } from '../../lib/api/get'
import * as Web from './webcomps'
import { mainUILoad, isValidJsonString } from '../../lib/uiHelper'
import { LoginModal } from '../../common/LoginModal'
import { ThemeHelmet } from './ThemeHelmet'
import { Loading } from '../../common/Loading'

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

export const Website = ({
  envData,
  appDataParsed,
  routeData,
  isLocalEnvironment,
  authDetails,
  setToggleLoginModal,
  toggleLoginModal,
  sideLoginModalRef,
}) => {
  const isLoggedIn = isValidJsonString(authDetails)
    ? authDetails.loggedIn
    : JSON.parse(JSON.stringify(authDetails)).loggedIn || false

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
  if (getPage.isLoading || getSPAPage.isLoading || getPage.isRefetching) {
    return <Loading envData={envData} appDataParsed={appDataParsed} />
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
      <ThemeHelmet defaultTheme={appDataParsed.webSettings['webSettings-defaultTheme'] || 'T1'} />
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
                            <TagName
                              setLoginModal={setToggleLoginModal}
                              pageData={comp}
                              toggleLoginModal={toggleLoginModal}
                              sideLoginModalRef={sideLoginModalRef}
                              envData={envData}
                              isLocalEnvironment={isLocalEnvironment}
                              isLoggedIn={isLoggedIn}
                            />
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
                        <TagName
                          setLoginModal={setToggleLoginModal}
                          pageData={comp}
                          toggleLoginModal={toggleLoginModal}
                          sideLoginModalRef={sideLoginModalRef}
                          envData={envData}
                          isLocalEnvironment={isLocalEnvironment}
                          isLoggedIn={isLoggedIn}
                        />
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
                            <TagName
                              setLoginModal={setToggleLoginModal}
                              pageData={comp}
                              toggleLoginModal={toggleLoginModal}
                              sideLoginModalRef={sideLoginModalRef}
                              envData={envData}
                              isLocalEnvironment={isLocalEnvironment}
                              isLoggedIn={isLoggedIn}
                            />
                          ) : (
                            <div>Something Went Wrong!</div>
                          )}
                        </div>
                      ),
                  ),
            ),
        )}
      {toggleLoginModal && (
        <LoginModal
          setToggleLoginModal={setToggleLoginModal}
          toggleLoginModal={toggleLoginModal}
          sideLoginModalRef={sideLoginModalRef}
          envData={envData}
          isLocalEnvironment={isLocalEnvironment}
          appDataParsed={appDataParsed}
        />
      )}
    </>
  )
}

Website.propTypes = {
  envData: PropTypes.object.isRequired,
  appDataParsed: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  authDetails: PropTypes.object.isRequired,
  setToggleLoginModal: PropTypes.func.isRequired,
  toggleLoginModal: PropTypes.bool.isRequired,
  sideLoginModalRef: PropTypes.object.isRequired,
}

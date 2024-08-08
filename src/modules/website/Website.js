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
 * The Website component is responsible for rendering the main content of the website,
 * including dynamically loaded components based on the route and page data.
 * It handles both SPA (Single Page Application) and regular page structures.
 *
 * @module website/Website
 * @description The Website component is responsible for rendering the main content of the website,
 * including dynamically loaded components based on the route and page data.
 * It handles both SPA (Single Page Application) and regular page structures.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.envData - Environment-specific data such as theme and logo URLs.
 * @param {Object} props.appDataParsed - Parsed application data used for rendering components.
 * @param {Object} props.routeData - Data related to the current route, including page ID and name.
 * @param {string} props.isLocalEnvironment - Indicator of whether the environment is local.
 * @param {Object} props.authDetails - Authentication details of the user.
 * @param {Function} props.setToggleLoginModal - Function to toggle the login modal visibility.
 * @param {boolean} props.toggleLoginModal - State indicating whether the login modal is visible.
 * @param {Object} props.sideLoginModalRef - Ref object for the login modal component.
 * @returns {JSX.Element} The rendered Website component.
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

  mainUILoad(
    envData.REACT_APP_PRIMARY_COLOR,
    envData.REACT_APP_SECONDARY_COLOR,
    envData.REACT_APP_THEME_FAVICON,
  )
  const getPage = useGetPageCall({
    apiURL: isLocalEnvironment,
    apiEndpoint: 'pageData',
    id: routeData.pageId,
    pageName: routeData.name,
    enabled: true,
  })

  const getSPAPage = useGetSPAPageCall({
    apiURL: isLocalEnvironment,
    apiEndpoint: 'spaPageData',
    homePage: appDataParsed.webSettings['webSettings-defaultSPAPage'],
    enabled: true,
  })

  if (getPage.isLoading || getSPAPage.isLoading || getPage.isRefetching) {
    return <Loading envData={envData} appDataParsed={appDataParsed} />
  }

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

import React from 'react'
import PropTypes from 'prop-types'

import { useGetPageCall } from '../../lib/api/get'
import { useGetSPAPageCall } from '../../lib/api/get'
import * as Web from './webcomps'
import { mainUILoad } from '../../lib/uiHelper'

import t1 from '../../assets/themes/t1.css'
import b from '../../assets/css/b.min.css'
import custom from '../../assets/css/custom.min.css'

/**
 * @module modules/Website
 * @description Website renders public webpages
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} props.envData Environmental Variables
 * @param {object} props.appDataParsed Routes, Site and SEO data
 * @param {object} props.routeData Current route details
 *
 * @example
 * <Website routeData={route} appDataParsed={appDataParsed} envData={envData} />
 */

export const Website = ({ envData, appDataParsed, routeData, isLocalEnvironment }) => {
  /**
   * Render website pages
   * @function Website
   * @description render webpage
   * @returns html webpage is rendered
   */

  const theme = 'T1'
  if (theme === 'T1') {
    document.getElementsByTagName('head')[0].innerHTML +=
      '<link href="' + t1 + '" rel="stylesheet">'
    document.getElementsByTagName('head')[0].innerHTML += '<link href="' + b + '" rel="stylesheet">'
    document.getElementsByTagName('head')[0].innerHTML +=
      '<link href="' + custom + '" rel="stylesheet">'
  }

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
                      {console.log(comp.className.className)}
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

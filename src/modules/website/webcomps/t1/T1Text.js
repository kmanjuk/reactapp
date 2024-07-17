import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

/**
 * @module modules/website/webcomps/t1/T1Text
 * @description Renders T1Text page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Text pageData={pageData} />
 */
export const T1Text = ({ pageData }) => {
  /**
   * Render T1Text page element
   * @function T1Text
   * @description render T1Text page element
   * @returns html T1Text page element is rendered
   */
  return (
    <section className="t1-news-single section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-12">
                <div className="t1-single-main">
                  <h1 className="t1-news-title">{pageData.content.content.header}</h1>
                  <div className="t1-news-text">{parse(pageData.content.content.text)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Text.propTypes = {
  pageData: PropTypes.object.isRequired,
}

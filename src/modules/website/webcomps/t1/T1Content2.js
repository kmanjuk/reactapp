import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Content2
 * @description Renders T1Content2 page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Content2 pageData={pageData} />
 */
export const T1Content2 = ({ pageData }) => {
  /**
   * Render T1Content2 page element
   * @function T1Content2
   * @description render T1Content2 page element
   * @returns html T1Content2 page element is rendered
   */
  return (
    <section className="t1-call-action t1-overlay" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="t1-content mt-5 mb-5" style={{ padding: '0' }}>
              <h2>{pageData.content.content.header}</h2>
              <p>{pageData.content.content.text}</p>
              {pageData.content.content.isButton && (
                <div className="t1-button">
                  <Link to={pageData.content.content.buttonLink} className="t1-btn">
                    {pageData.content.content.buttonName}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

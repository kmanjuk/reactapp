import React from 'react'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Content3
 * @description Renders T1Content3 page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Content3 pageData={pageData} />
 */
export const T1Content3 = ({ pageData }) => {
  /**
   * Render T1Content3 page element
   * @function T1Content3
   * @description render T1Content3 page element
   * @returns html T1Content3 page element is rendered
   */
  return (
    <section className="t1-why-choose t1-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title" style={{ padding: '0 25px' }}>
              <h2>{pageData.content.content.header1}</h2>
              <p>{pageData.content.content.text1}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            {/* Start Choose Left */}
            <div className="t1-choose-left">
              <h3>{pageData.content.content.header2}</h3>
              <p>{pageData.content.content.text2}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="t1-choose-right"
              style={{
                backgroundImage: `url(${pageData.content.content.image})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

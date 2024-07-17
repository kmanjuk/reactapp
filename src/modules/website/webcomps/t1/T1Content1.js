import React from 'react'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Content1
 * @description Renders T1Content1 page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Content1 pageData={pageData} />
 */
export const T1Content1 = ({ pageData }) => {
  /**
   * Render T1Content1 page element
   * @function T1Content1
   * @description render T1Content1 page element
   * @returns html T1Content1 page element is rendered
   */
  return (
    <section className="t1-Feautes t1-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title" style={{ padding: '0' }}>
              <h2 className="t1-why-choose t1-choose-left">{pageData.content.content.header}</h2>
              <hr />
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

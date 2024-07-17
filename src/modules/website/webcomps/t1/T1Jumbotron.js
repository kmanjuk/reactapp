import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Jumbotron
 * @description Renders T1Jumbotron page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Jumbotron pageData={pageData} />
 */
export const T1Jumbotron = ({ pageData }) => {
  /**
   * Render T1Jumbotron page element
   * @function T1Jumbotron
   * @description render T1Jumbotron page element
   * @returns html T1Jumbotron page element is rendered
   */
  return (
    <section className="t1-newsletter t1-section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6  col-12">
            <div className="t1-subscribe-text ">
              <h6>{pageData.content.content.header}</h6>
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="t1-subscribe-form text-right">
              <Link to={pageData.content.content.buttonLink} className="t1-btn text-center">
                {pageData.content.content.buttonName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Jumbotron.propTypes = {
  pageData: PropTypes.object.isRequired,
}

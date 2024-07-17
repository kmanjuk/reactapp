import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Hero
 * @description Renders T1Hero page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Hero pageData={pageData} />
 */
export const T1Hero = ({ pageData }) => {
  /**
   * Render T1Hero page element
   * @function T1Hero
   * @description render T1Hero page element
   * @returns html T1Hero page element is rendered
   */
  return (
    <section className="t1-slider">
      <div className="t1-hero-slider">
        <div
          className="t1-single-slider"
          style={{
            backgroundImage: `url(${pageData.content.content.bgImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="t1-text">
                  <h1>{parse(pageData.content.content.header)}</h1>
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
        </div>
      </div>
    </section>
  )
}

T1Hero.propTypes = {
  pageData: PropTypes.object.isRequired,
}

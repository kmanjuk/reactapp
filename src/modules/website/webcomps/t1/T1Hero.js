import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'

/**
 * Hero section component displaying a background image, header, text, and an optional button.
 *
 * This component renders the hero section of the page with a background image, header, text, and an optional button that links to another page.
 *
 * @module ThemeT1/T1Hero
 * @description This component renders the hero section of the page with a background image, header, text, and an optional button that links to another page.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the hero section.
 * @param {Object} props.pageData.content - Content of the hero section.
 * @param {string} props.pageData.content.content.bgImage - URL of the background image.
 * @param {string} props.pageData.content.content.header - Header text for the hero section, can include HTML tags.
 * @param {string} props.pageData.content.content.text - Descriptive text for the hero section.
 * @param {boolean} props.pageData.content.content.isButton - Flag indicating if a button should be displayed.
 * @param {string} props.pageData.content.content.buttonLink - URL that the button links to.
 * @param {string} props.pageData.content.content.buttonName - Display name of the button.
 * @returns {JSX.Element} The rendered hero section component.
 */
export const T1Hero = ({ pageData }) => {
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

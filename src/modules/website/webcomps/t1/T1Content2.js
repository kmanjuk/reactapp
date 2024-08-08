import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Call-to-action section component for Theme T1.
 *
 * This component displays a call-to-action section with a header, text, and optionally a button.
 * It uses data from `pageData` to populate the content and handle button visibility and link.
 *
 * @module ThemeT1/T1Content2
 * @description This component displays a call-to-action section with a header, text, and optionally a button.
 * It uses data from `pageData` to populate the content and handle button visibility and link.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the call-to-action section, including header, text, and button details.
 * @param {Object} props.pageData.content - Content of the section.
 * @param {Object} props.pageData.content.content - Details of the section content.
 * @param {string} props.pageData.content.content.header - The header text for the section.
 * @param {string} props.pageData.content.content.text - The main text content of the section.
 * @param {boolean} props.pageData.content.content.isButton - Flag indicating whether to display a button.
 * @param {string} props.pageData.content.content.buttonLink - The URL to navigate to when the button is clicked.
 * @param {string} props.pageData.content.content.buttonName - The text to display on the button.
 * @returns {JSX.Element} The rendered component.
 */
export const T1Content2 = ({ pageData }) => {
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

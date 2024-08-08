import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Jumbotron section component displaying a header, text, and a button.
 *
 * This component renders a jumbotron section with a header, descriptive text, and a button that links to another page.
 *
 * @module ThemeT1/T1Jumbotron
 * @description This component renders a jumbotron section with a header, descriptive text, and a button that links to another page.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the jumbotron section.
 * @param {Object} props.pageData.content - Content of the jumbotron section.
 * @param {string} props.pageData.content.content.header - Header text for the jumbotron section.
 * @param {string} props.pageData.content.content.text - Descriptive text for the jumbotron section.
 * @param {string} props.pageData.content.content.buttonLink - URL that the button links to.
 * @param {string} props.pageData.content.content.buttonName - Display name of the button.
 * @returns {JSX.Element} The rendered jumbotron section component.
 */
export const T1Jumbotron = ({ pageData }) => {
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

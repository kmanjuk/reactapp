import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToActionT4 = ({ pageData }) => {
  return (
    <section className="theme1-pink-color-bg">
      <div className="theme1-container">
        <div className="theme1-row">
          <div className="theme1-col-lg-4 theme1-col-md-4 theme1-col-xl-4">
            <Link
              to={pageData.content.content.buttonLink}
              className="theme1-btn theme1-btn-border theme1-btn-white-border theme1-btn-block"
            >
              {pageData.content.content.buttonText}
            </Link>
          </div>
          <div className="theme1-col-lg-8 theme1-col-md-8 theme1-col-xl-8 theme1-d-flex theme1-align-items-center theme1-justify-content-end">
            <div className="theme1-yit-cta">
              <h6>{pageData.content.content.text}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToActionT4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

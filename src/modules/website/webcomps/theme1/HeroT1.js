import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const HeroT1 = ({ pageData }) => {
  return (
    <div
      className="theme1-yit-cover-bg bg-overlay"
      style={{
        backgroundImage: `url(${pageData.content.content.image})`,
      }}
    >
      <div className="theme1-container">
        <div className="theme1-row">
          <div className="theme1-col">
            <div className="theme1-text-center theme1-white-color-text">
              <div className="theme1-d-flex theme1-align-items-center theme1-height-cover theme1-justify-content-center theme1-xs-banner-medium-space">
                <div className="theme1-inner-banner-content">
                  <h2 className="theme1-white-color-text">{pageData.content.content.title}</h2>
                  <p className="theme1-yit-lead">{pageData.content.content.text}</p>
                  {pageData.content.content.button && (
                    <Link
                      to={pageData.content.content.buttonLink}
                      title="Discover More"
                      className="theme1-btn theme1-btn-rounded theme1-text-uppercase"
                    >
                      {pageData.content.content.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

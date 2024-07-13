import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../../../../assets/themes/theme2.css'

export const Banner3T2 = ({ pageData }) => {
  return (
    <div id="static-slider3-html">
      <div className="theme2-static-slider3">
        <div className="theme2-container">
          <div className="theme2-row theme2-justify-content-center ">
            <div
              className="theme2-col-md-8 theme2-align-self-center theme2-text-center aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration={1200}
            >
              <h1 className="theme2-title">
                {pageData.content.content.text}{' '}
                <b className="theme2-font-bold">{pageData.content.content.textBold}</b>{' '}
                <span
                  className="theme2-text-success-gradiant theme2-font-bold theme2-typewrite"
                  data-period={2000}
                >
                  <span className="theme2-wrap">{pageData.content.content.textColored}</span>
                </span>
              </h1>
              <Link
                className="theme2-btn theme2-btn-success-gradiant theme2-text-white theme2-btn-md theme2-btn-arrow theme2-m-t-20"
                to={pageData.content.content.buttonLink}
              >
                <span>
                  {pageData.content.content.buttonText} <i className="ti-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Banner3T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

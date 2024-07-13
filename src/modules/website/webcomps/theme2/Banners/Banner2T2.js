import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../../../../assets/themes/theme2.css'

export const Banner2T2 = ({ pageData }) => {
  const errState = { error: false }
  try {
    return (
      <div id="static-slider2-html">
        <div className="theme2-static-slider2 theme2-spacer">
          <div className="theme2-container">
            <div className="theme2-row">
              <div
                className="theme2-col-md-5 theme2-align-self-center aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={1200}
              >
                <h1 className="theme2-title">
                  <span className="theme2-typewrite" data-period={2000}>
                    <span className="theme2-wrap" />
                  </span>
                  <br />
                  {pageData.content.content.header}
                  <span className="theme2-text-megna">.</span>
                </h1>
                <h6 className="theme2-subtitle">{pageData.content.content.text}</h6>
                <Link
                  className="theme2-btn theme2-btn-success-gradiant theme2-text-white theme2-btn-md theme2-btn-arrow theme2-m-t-20 theme2-m-b-10"
                  to={pageData.content.content.button1Link}
                >
                  <span>
                    {pageData.content.content.button1Text} <i className="ti-arrow-right" />
                  </span>
                </Link>
                <Link
                  className="theme2-btn theme2-btn-link theme2-btn-md theme2-btn-arrow theme2-m-t-20 theme2-m-b-10 theme2-font-medium"
                  to={pageData.content.content.button2Link}
                >
                  <span className="theme2-underline">
                    {pageData.content.content.button2Text} <i className="ti-arrow-right" />
                  </span>
                </Link>
              </div>
              <div
                className="theme2-col-md-7 theme2-img-anim aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={2200}
              >
                <img
                  src={pageData.content.content.image}
                  alt="trt"
                  className="theme2-img-fluid m-t-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Banner2T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

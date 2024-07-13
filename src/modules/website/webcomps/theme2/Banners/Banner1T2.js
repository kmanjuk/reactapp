import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../../../assets/themes/theme2.css'

export const Banner1T2 = ({ pageData }) => {
  const errState = { error: false }
  try {
    return (
      <div
        id="static-slider1-html"
        className="theme2-mb-5"
        style={{
          backgroundColor:
            pageData.content.content.bgColor !== 0 ? pageData.content.content.bgColor : '',
        }}
      >
        <div className="theme2-static-slider1">
          <div className="theme2-container">
            {/* Row  */}
            <div className="theme2-row">
              {/* Column */}
              <div
                className="theme2-col-md-7 theme2-align-self-center aos-init aos-animate"
                data-aos="fade-right"
                data-aos-duration={2200}
                data-aos-once={false}
              >
                <h1 className="theme2-title">
                  {pageData.content.content.text}{' '}
                  <span
                    className="theme2-text-success-gradiant theme2-typewrite"
                    data-period={2000}
                    data-type='[ "Photoshop", "HTML", "CSS3", "Angular CLI" ]'
                  >
                    <span className="wrap">{pageData.content.content.textColored}</span>
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
              {/* Column */}
              <div
                className="theme2-col-md-5 theme2-img-anim theme2-m-t-40 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration={2200}
                data-aos-once={false}
              >
                <img src={pageData.content.content.image} alt="trt" className="theme2-img-fluid" />
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

Banner1T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

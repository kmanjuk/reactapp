import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Banner8T2 = ({ pageData }) => {
  const errState = { error: false }
  try {
    return (
      <div id="static-slider8-html">
        <div
          className="static-slider8"
          style={{
            backgroundImage: `url('${pageData.content.content.imageBG}')`,
          }}
        >
          <div className="container">
            {/* Row  */}
            <div className="row justify-content-center ">
              {/* Column */}
              <div className="col-md-8 align-self-center text-center">
                <h1
                  className="title text-white typewrite"
                  data-period={2000}
                  data-type='[ "Because", "TRT" ]'
                >
                  <span className="wrap" />
                </h1>
                <h4 className="text-white font-light">{pageData.content.content.text}</h4>
                <Link
                  className="btn btn-danger-gradiant text-white btn-rounded btn-md btn-arrow m-t-20 m-b-40"
                  to={pageData.content.content.buttonLink}
                >
                  <span>
                    {pageData.content.content.buttonText} <i className="ti-arrow-right" />
                  </span>
                </Link>
                <br />
                <img
                  src={pageData.content.content.image}
                  alt="trt"
                  className="showcase-img aos-init"
                  data-aos="fade-up"
                  data-aos-duration={2200}
                />
              </div>
              {/* Column */}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Banner8T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Features32 = (props) => {
  try {
    return (
      <div className="spacer feature32">
        <div className="container">
          <div id="feature32-html">
            <div className="row wrap-feature-32">
              <div className="col-md-6">
                {' '}
                <img
                  src={props.pageData.image.image}
                  alt="Image"
                  className="img-responsive aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration={3000}
                  data-aos-offset={300}
                />{' '}
              </div>
              <div
                className="col-md-6 align-self-center aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration={3000}
                data-aos-offset={300}
              >
                {' '}
                <h2 className="title m-t-20">{props.pageData.header.header}</h2>
                <p className="m-t-30">{props.pageData.text.text}</p>{' '}
                <a
                  className="btn btn-info-gradiant btn-md btn-rounded btn-arrow m-t-20"
                  data-bs-toggle="collapse"
                  href="#f32"
                >
                  <span>
                    {props.pageData.button.button}
                    <i className="ti-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features32.propTypes = {
  pageData: PropTypes.object.isRequired,
}

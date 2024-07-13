import React from 'react'
import PropTypes from 'prop-types'

export const Features43 = (props) => {
  try {
    return (
      <div className="spacer feature43">
        <div className="container">
          <div id="feature43-html">
            <div className="row">
              <div className="col-lg-5 aos-init" data-aos="fade-right" data-aos-duration={1200}>
                {' '}
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle">{props.pageData.text.text}</h6>{' '}
                <a
                  className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                  data-bs-toggle="collapse"
                  href="#f43"
                >
                  <span>
                    {props.pageData.button.button} <i className="ti-arrow-right" />
                  </span>
                </a>
              </div>
              <div className="col-lg-6 ms-auto mt-4 mt-lg-0">
                <div className="row wrap-feature43-box">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div
                        className="col-md-6 aos-init"
                        data-aos="fade-right"
                        data-aos-duration={1200}
                      >
                        <h2 className="text-success-gradiant display-5">
                          <i className={`icon-${item.icon.icon}`} />
                        </h2>
                        <h5 className="title mt-3">{item.title.title}</h5>
                        <h6 className="subtitle">{item.text2.text2}</h6>
                      </div>
                    ))}
                </div>
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

Features43.propTypes = {
  pageData: PropTypes.object.isRequired,
}

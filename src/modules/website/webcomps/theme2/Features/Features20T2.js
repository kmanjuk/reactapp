import React from 'react'
import PropTypes from 'prop-types'

export const Features20 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature20 up">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title"> {props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* Row  */}
          <div className="wrap-feature-20">
            <div id="feature20-html">
              <div className="row">
                {/* Column */}
                {props.pageData.childItems.length > 0 &&
                  props.pageData.childItems.map((item, index) => (
                    <div
                      className={`col-lg-${item.sizelg.sizelg} aos-init`}
                      data-aos="flip-left"
                      data-aos-duration={1200}
                    >
                      <div className="card">
                        <div className="row">
                          <div className="col-md-8">
                            <div className="card-body d-flex no-block">
                              <div className="m-r-20">
                                <img
                                  src={item.image.image}
                                  alt="featureImage"
                                  width={70}
                                  className="rounded"
                                />
                              </div>
                              <div>
                                <h5 className="font-medium">{item.text.text}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 text-center">
                            <a
                              href={item.link.link}
                              className="text-white linking bg-success-gradiant"
                            >
                              {item.arrowlabel.arrowlabel}
                              <i className="ti-arrow-right" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {/* Row  */}
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

Features20.propTypes = {
  pageData: PropTypes.object.isRequired,
}

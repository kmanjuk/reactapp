import React from 'react'
import PropTypes from 'prop-types'

export const Features34 = (props) => {
  try {
    return (
      <div className="spacer bg-light feature34 wrap-feature34-box">
        <div className="container">
          <div id="feature34-html">
            {/* Row  */}
            <div className="row">
              <div className="col-lg-6 left-image">
                {' '}
                <img
                  src={props.pageData.image.image}
                  className="img-fluid aos-init"
                  alt="Image"
                  data-aos="fade-down"
                  data-aos-duration={3000}
                  data-aos-offset={500}
                />{' '}
              </div>
              <div className="col-lg-6 ms-auto">
                <div className="aos-init" data-aos="fade-right" data-aos-duration={1200}>
                  {' '}
                  <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                  <p className="op-8">{props.pageData.text.text}</p>
                  <div className="row m-t-30">
                    <div className="col-md-12">
                      <div className="card card-shadow">
                        <div className="card-body">
                          <div className="row p-20">
                            {props.pageData.childItems.length > 0 &&
                              props.pageData.childItems.map((item, index) => (
                                <div className="col-6 b-r">
                                  <h2 key={index} className="m-b-0 font-light">
                                    {item.percentage.percentage}
                                  </h2>
                                  <h6 className="text-muted">{item.text2.text2}</h6>
                                </div>
                              ))}

                            <div className="col-lg-12 m-t-20">
                              {' '}
                              <a
                                className="btn btn-success-gradiant text-white d-grid btn-md btn-block btn-arrow m-t-20"
                                data-bs-toggle="collapse"
                                href="#f34"
                              >
                                <span>
                                  {props.pageData.button.button} <i className="ti-arrow-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

Features34.propTypes = {
  pageData: PropTypes.object.isRequired,
}

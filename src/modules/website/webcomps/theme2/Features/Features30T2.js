import React from 'react'
import PropTypes from 'prop-types'

export const Features30 = (props) => {
  try {
    return (
      <div className="spacer ">
        <div id="feature30-html">
          <div className="container feature30">
            <div className="row">
              <div className="col-lg-10">
                <img
                  src={props.pageData.image.image}
                  className="rounded img-responsive"
                  alt="Image"
                />
              </div>
              <div
                className="col-lg-5 col-md-7 text-center wrap-feature30-box aos-init"
                data-aos="fade-left"
                data-aos-duration={1800}
                data-aos-easing="linear"
              >
                <div className="card card-shadow">
                  <div className="card-body">
                    <div className="p-20">
                      <h3 className="title">{props.pageData.header.header}</h3>
                      <p>{props.pageData.text.text}</p>
                      <a
                        className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                        data-bs-toggle="collapse"
                        href="#f30"
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

Features30.propTypes = {
  pageData: PropTypes.object.isRequired,
}

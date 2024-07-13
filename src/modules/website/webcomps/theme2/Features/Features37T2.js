import React from 'react'
import PropTypes from 'prop-types'

export const Features37 = (props) => {
  try {
    return (
      <div className="spacer feature37 wrap-feature37-box">
        <div id="feature37-html">
          <div className="row">
            <div className="col-lg-5">
              {' '}
              <img src={props.pageData.image.image} alt="trt" className="img-fluid" />
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="card max-600">
                <div className="card-body">
                  {' '}
                  <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                  <p className="m-t-30">{props.pageData.text.text}</p>
                  <div className="card card-shadow">
                    <div className="card-body">
                      <div className="d-block d-md-flex p-10 no-block text-center text-md-start">
                        <div className="m-r-20 align-self-center">
                          <i className="text-success-gradiant fa fa-cloud display-5" />
                        </div>
                        <div className="m-r-10 align-self-center">
                          <h5 className="m-b-0">{props.pageData.title.title} </h5>
                          <h6 className="subtitle">{props.pageData.subtitle.subtitle}</h6>
                        </div>
                        <div className="ms-auto align-self-center">
                          <a
                            className="btn btn-info-gradiant btn-rounded btn-md btn-arrow"
                            data-bs-toggle="collapse"
                            href="#f37"
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

Features37.propTypes = {
  pageData: PropTypes.object.isRequired,
}

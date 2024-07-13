import React from 'react'
import PropTypes from 'prop-types'

export const Features35 = (props) => {
  try {
    return (
      <div className="spacer feature35 wrap-feature35-box">
        <div id="feature35-html">
          <div className="row">
            <div className="col-lg-5 col-md-5 align-self-center">
              <div className="card max-500 pull-right">
                <div className="card-body">
                  {' '}
                  <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                  <p className="m-t-30">{props.pageData.text.text}</p>{' '}
                  <a
                    className="btn btn-success-gradiant text-white btn-md btn-arrow m-t-20"
                    data-bs-toggle="collapse"
                    href="#f35"
                  >
                    <span>
                      {props.pageData.button.button} <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="feature-35-owl owl-carousel owl-theme owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      '-webkit-transform': 'translate3d(-1678px, 0px, 0px)',
                      '-ms-transform': 'translate3d(-1678px, 0px, 0px)',
                      transform: 'translate3d(-1678px, 0px, 0px)',
                      '-webkit-transition': 'all 0s ease 0s',
                      transition: 'all 0s ease 0s',
                      width: '6154px',
                    }}
                  >
                    {props.pageData.childItems.length > 0 &&
                      props.pageData.childItems.map((item, index) => (
                        <div
                          key={index}
                          className="owl-item cloned"
                          style={{ width: '529.406px', 'margin-right': '30px' }}
                        >
                          <div className="item">
                            <a href="javascript:void(0)">
                              <img
                                src={item.image.image}
                                alt="featureImage"
                                className="img-fluid"
                              />
                              <h4>{item.title.title}</h4>
                            </a>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="owl-nav disabled">
                  <div className="owl-prev">prev</div>
                  <div className="owl-next">next</div>
                </div>
                <div className="owl-dots">
                  <div className="owl-dot active">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
                  </div>
                  <div className="owl-dot">
                    <span />
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

Features35.propTypes = {
  pageData: PropTypes.object.isRequired,
}

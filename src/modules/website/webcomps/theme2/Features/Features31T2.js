import React from 'react'
import PropTypes from 'prop-types'

export const Features31 = (props) => {
  try {
    return (
      <div className="spacer bg-light feature31 wrap-feature31-box">
        <div className="container">
          <div id="feature31-html">
            {/* Row  */}
            <div className="row">
              <div className="container">
                <div className="col-lg-6">
                  <div
                    className="aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-duration={1200}
                  >
                    {' '}
                    <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                    <p className="op-8">{props.pageData.text.text}</p>
                    <div className="row m-t-30">
                      {props.pageData.childItems.length > 0 &&
                        props.pageData.childItems.map((item, index) => (
                          <div key={index} className={`col-md-${item.sizemd.sizemd}`}>
                            <div className="card card-shadow">
                              <div className="card-body text-center text-uppercase">
                                {' '}
                                <i className={`icon-${item.icon.icon} display-5 text-success`} />
                                <h6 className="m-t-10 font-medium">{item.title.title}</h6>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>{' '}
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f31"
                    >
                      <span>
                        {props.pageData.button.button} <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 right-image">
                {' '}
                <img
                  src={props.pageData.image.image}
                  className="half-radius aos-init aos-animate"
                  alt="trtui"
                  data-aos="fade-left"
                  data-aos-duration={3000}
                  data-aos-offset={500}
                />{' '}
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

Features31.propTypes = {
  pageData: PropTypes.object.isRequired,
}

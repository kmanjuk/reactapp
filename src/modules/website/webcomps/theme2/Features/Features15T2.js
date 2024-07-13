import React from 'react'
import PropTypes from 'prop-types'

export const Features15 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature15">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature15-html">
            {/* Row  */}
            <div className="row m-t-40">
              {/* Column */}
              <div className="col-lg-6 wrap-feature15-box">
                <div className="row">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div
                        key={index}
                        className={`col-md-${item.sizemd.sizemd} m-b-30 aos-init`}
                        data-aos="fade-down"
                        data-aos-duration={1000}
                      >
                        <div className="d-flex no-block">
                          <div className="no-shrink">
                            <span className="icon-round bg-white display-5 text-success ">
                              <i className={`icon-${item.icon.icon}`} />
                            </span>
                          </div>
                          <div className="p-20">
                            <h5 className="font-medium">
                              <a href={item.link.link} className="linking">
                                {item.title.title} <i className="ti-arrow-right" />
                              </a>
                            </h5>
                            <p className="m-t-20">{item.text.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              {/* Column */}
              <div
                className="col-lg-6 wrap-feature15-box aos-init"
                data-aos="flip-left"
                data-aos-duration={1200}
              >
                <img
                  src={props.pageData.image.image}
                  className="img-responsive"
                  alt="FeatureImage"
                />
              </div>
              {/* Column */}
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

Features15.propTypes = {
  pageData: PropTypes.object.isRequired,
}

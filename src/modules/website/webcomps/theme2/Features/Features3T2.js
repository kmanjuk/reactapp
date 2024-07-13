import React from 'react'
import PropTypes from 'prop-types'

export const Features3 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature3">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* Row  */}
          <div id="feature3-html">
            <div className="row m-t-40">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div key={index} className={`col-md-${item.sizemd.sizemd} wrap-feature3-box`}>
                    <div
                      className="card card-shadow aos-init"
                      data-aos="fade-right"
                      data-aos-duration={1200}
                    >
                      <div className="card-body d-flex">
                        <div className="icon-space align-self-center">
                          <i className={`icon-${item.icon.icon} display-2 text-success-gradiant`} />
                        </div>
                        <div className="align-self-center">
                          <h5 className="font-medium">
                            <a href={item.link.link} className="linking">
                              {item.linkname.linkname} <i className="ti-arrow-right" />
                            </a>
                          </h5>
                          <p className="m-t-20">{item.text1.text1}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="row">
            {/* Column */}
            <div className="col-md-12 m-t-20 text-center">
              <a
                className="btn btn-success-gradiant text-white btn-md btn-arrow"
                data-bs-toggle="collapse"
                href={props.pageData.buttonLink.buttonLink}
              >
                <span>
                  {props.pageData.button.button} <i className="ti-arrow-right" />
                </span>
              </a>
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

Features3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Features27 = (props) => {
  try {
    return (
      <div className="spacer bg-light feature26">
        <div className="container">
          <div id="feature27-html">
            <div className="row">
              {/* column */}
              <div className="col-lg-6 align-self-center">
                <h2 className="title">{props.pageData.header.header}</h2>
                <p className="m-t-30">{props.pageData.text.text}</p>
                <div className="row">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div className={`col-md-${item.sizemd.sizemd} m-t-40`}>
                        <i className={`icon-${item.icon.icon} text-info-gradiant display-5 `} />
                        <h5 className="font-medium m-t-20 m-b-20">{item.title.title}</h5>
                        <p>{item.text.text}</p>
                        <a className="linking font-medium" data-bs-toggle="collapse" href="#f27">
                          {item.label.label}
                          <i className="ti-arrow-right text-success" />
                        </a>
                      </div>
                    ))}
                </div>
              </div>
              {/* column */}
              <div
                className="col-lg-6 text-center aos-init"
                data-aos="fade-up"
                data-aos-duration={1800}
                data-aos-easing="linear"
              >
                <img src={props.pageData.image.image} className="img-fluid" alt="FeatureImage" />
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

Features27.propTypes = {
  pageData: PropTypes.object.isRequired,
}

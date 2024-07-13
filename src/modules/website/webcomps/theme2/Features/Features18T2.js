import React from 'react'
import PropTypes from 'prop-types'

export const Features18 = (props) => {
  try {
    return (
      <div className="bg-light spacer feature18">
        <div className="container">
          {/* row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title"> {props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* row  */}
          <div className="wrap-feature-18">
            <div id="feature18-html">
              <div className="row">
                {/* Column  */}
                {props.pageData.childItems.length > 0 &&
                  props.pageData.childItems.map((item, index) => (
                    <div
                      key={index}
                      className={`col-lg-${item.sizelg.sizelg} aos-init`}
                      data-aos="fade-right"
                      data-aos-duration={1200}
                      style={{
                        background: `url(${item.image.image})`,
                      }}
                    >
                      {/* card  */}
                      <div className="card">
                        <div className="row">
                          <div className="col-md-5 icon-position" style={{}}>
                            <div className="icon-round bg-success-gradiant text-white display-5">
                              <i className={`icon-${item.icon.icon}`} />
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="card-body p-40">
                              <h4 className="font-medium">{item.title.title}</h4>
                              <p>{item.text.text}</p>
                              <a href={item.link.link} className="linking text-underline">
                                {item.arrowlabel.arrowlabel}
                                <i className="ti-arrow-right" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

Features18.propTypes = {
  pageData: PropTypes.object.isRequired,
}

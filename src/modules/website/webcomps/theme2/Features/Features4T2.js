import React from 'react'
import PropTypes from 'prop-types'

export const Features4 = (props) => {
  try {
    return (
      <div className="spacer feature4">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* Row  */}
          <div id="feature4-html">
            <div className="row m-t-40">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div key={index} className={`col-md-${item.sizemd.sizemd} wrap-feature4-box`}>
                    <div
                      className="card aos-init"
                      data-aos="zoom-out-right"
                      data-aos-duration={1200}
                    >
                      <div className="card-body">
                        <div className="icon-round bg-light-info">
                          <i className={`icon-${item.icon.icon}`} />
                        </div>
                        <h5 className="font-medium">{item.title.title}</h5>
                        <p className="m-t-20">{item.text1.text1}</p>
                        <a
                          data-bs-toggle="collapse"
                          href={item.link.link}
                          className="linking text-themecolor"
                        >
                          {item.button.button} <i className="ti-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
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

Features4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

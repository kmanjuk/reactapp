import React from 'react'
import PropTypes from 'prop-types'

export const Features24 = (props) => {
  try {
    return (
      <div className="spacer feature24">
        <div className="container">
          {/* Row */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              {' '}
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* Row */}
          <div className="wrap-feature-24">
            <div id="feature24-html">
              <div className="row">
                {/* Column */}
                {props.pageData.childItems.length > 0 &&
                  props.pageData.childItems.map((item, index) => (
                    <div
                      key={index}
                      className={`col-lg-${item.sizelg.sizelg} col-md-${item.sizemd.sizemd}`}
                    >
                      <div className="card card-shadow">
                        <a href="javascript:void(0)" className="service-24">
                          {' '}
                          <i className={`icon-${item.icon.icon}`} />
                          <h6 className="ser-title">{item.title.title}</h6>
                        </a>
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

Features24.propTypes = {
  pageData: PropTypes.object.isRequired,
}

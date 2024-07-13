import React from 'react'
import PropTypes from 'prop-types'

export const Features25 = (props) => {
  try {
    return (
      <div className="spacer bg-light feature24">
        <div className="container">
          {/* Row */}
          <div id="feature25-html">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center m-b-40">
                <img src={props.pageData.image.image} alt="trt" className="iimg-fluid" />
              </div>
              <div className="col-lg-7 col-md-9 text-center">
                {' '}
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle">{props.pageData.text.text}</h6>
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

Features25.propTypes = {
  pageData: PropTypes.object.isRequired,
}

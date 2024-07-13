import React from 'react'
import PropTypes from 'prop-types'

export const CallToAction3 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="mini-spacer bg-light c2a3">
        <div className="container">
          <div className="d-flex">
            <div className="display-7 align-self-center">
              <h3 className>{props.pageData.header.header}</h3>
              <h6 className="font-16 subtitle">{props.pageData.text.text}</h6>
            </div>
            <div className="ms-auto m-t-10 m-b-10">
              <span
                className="btn btn-info-gradiant btn-md"
                to={props.pageData.buttonLink.buttonLink}
              >
                {props.pageData.buttonText.buttonText}
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

CallToAction3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

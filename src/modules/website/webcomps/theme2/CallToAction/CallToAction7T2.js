import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction7T2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className={`theme2-mini-spacer theme2-bg-${props.pageData.content.content.bgColor} theme2-text-white theme2-c2a7`}
      >
        <div className="theme2-container">
          <div className="theme2-d-flex">
            <div className="theme2-display-7 theme2-align-self-center">
              {props.pageData.content.content.header}
            </div>
            <div className="theme2-ms-auto theme2-m-t-10 theme2-m-b-10">
              <Link
                to={props.pageData.content.content.buttonLink}
                className="theme2-btn theme2-btn-outline-light theme2-btn-md"
              >
                {props.pageData.content.content.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

CallToAction7T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

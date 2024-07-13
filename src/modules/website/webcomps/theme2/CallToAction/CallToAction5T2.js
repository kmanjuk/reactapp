import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction5 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className="mini-spacer c2a5"
        style={{ backgroundImage: `url(${props.pageData.imageBG.imageBG})` }}
      >
        <div className="container">
          <div className="d-flex">
            <div className="display-7 align-self-center">
              <h3 className="text-white">{props.pageData.header.header}</h3>
            </div>
            <div className="ms-auto m-t-10 m-b-10">
              <Link
                to={props.pageData.buttonLink.buttonLink}
                className="btn bg-white text-inverse btn-md"
              >
                {props.pageData.buttonText.buttonText}
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
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

CallToAction5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

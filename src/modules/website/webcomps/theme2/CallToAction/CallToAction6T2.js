import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction6 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer c2a6">
        <div className="container">
          {/* row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
              <Link
                to={props.pageData.buttonLink.buttonLink}
                className="btn btn-danger btn-md m-t-20"
              >
                {props.pageData.buttonText.buttonText}
              </Link>
            </div>
            <div className="col-md-12 text-center m-t-30">
              <img src={props.pageData.image.image} alt="trt" className="img-fluid" />
            </div>
          </div>
          {/* row  */}
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

CallToAction6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

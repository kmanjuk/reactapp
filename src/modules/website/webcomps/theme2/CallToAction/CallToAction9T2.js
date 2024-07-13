import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction9 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className={`bg-${props.pageData.bgColor.bgColor} c2a9`}
        style={{ backgroundImage: `url(${props.pageData.imageBG.imageBG})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h6 className="font-16 subtitle text-white">{props.pageData.text.text}</h6>
              <h1 className="text-white text-uppercase">{props.pageData.header.header}</h1>
              <div className="m-t-40">
                <Link
                  to={props.pageData.buttonLink.buttonLink}
                  className="btn bg-white text-dark btn-rounded btn-md"
                >
                  {props.pageData.buttonText.buttonText}
                </Link>
              </div>
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

CallToAction9.propTypes = {
  pageData: PropTypes.object.isRequired,
}

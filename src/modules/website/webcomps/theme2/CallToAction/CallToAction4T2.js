import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction4 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer c2a4">
        <div className="container">
          <div className="row p-b-30">
            <div className="col-lg-9 col-md-7">
              <h2 className="font-bold">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
            <div className="col-lg-3 col-md-5 align-self-center">
              <Link
                className="btn btn-danger-gradiant btn-md btn-arrow btn-rounded m-b-20 pull-right"
                to={props.pageData.buttonLink.buttonLink}
              >
                <span>
                  {props.pageData.buttonText.buttonText} <i className="ti-arrow-right" />
                </span>
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

CallToAction4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

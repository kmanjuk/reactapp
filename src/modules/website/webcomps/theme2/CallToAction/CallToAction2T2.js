import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import c2a1 from '../../../../assets/images/c2a1.jpg'

export const CallToAction2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer c2a2">
        <div className="container">
          {/* Row */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title font-light">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
              <div className="m-t-40">
                <Link
                  className="btn btn-success-gradiant btn-rounded btn-md btn-arrow m-t-20 m-r-10"
                  to={props.pageData.button1Link.button1Link}
                >
                  <span>
                    {props.pageData.button1Text.button1Text} <i className="ti-arrow-right" />
                  </span>
                </Link>
                <Link
                  className="btn btn-outline-inverse btn-rounded btn-md btn-arrow m-t-20"
                  to={props.pageData.button2Link.button2Link}
                >
                  <span>
                    {props.pageData.button2Text.button2Text} <i className="ti-arrow-right" />
                  </span>
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

CallToAction2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

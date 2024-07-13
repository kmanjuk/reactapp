import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const CallToAction10 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className="spacer c2a10"
        style={{ backgroundImage: `url(${props.pageData.imageBG.imageBG})` }}
      >
        <div className="container">
          {/* Row */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 text-center both-space">
              <div className="card aos-init" data-aos="flip-left" data-aos-duration={1200}>
                <div className="card-body">
                  <div className="text-box">
                    <h3 className="title">{props.pageData.header.header}</h3>
                    <h6 className="subtitle">{props.pageData.text.text}</h6>{' '}
                    <Link
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
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

CallToAction10.propTypes = {
  pageData: PropTypes.object.isRequired,
}

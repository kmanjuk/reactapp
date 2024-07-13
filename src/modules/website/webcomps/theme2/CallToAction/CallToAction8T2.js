import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import c2a6 from '../../../../assets/images/c2a6.jpg'

export const CallToAction8 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className="c2a8"
        style={{
          backgroundImage: `url(${props.pageData.imageBG.imageBG})`,
        }}
      >
        <div className="container">
          {/* Row */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 text-center both-space">
              <div
                className="card bg-danger-gradiant aos-init"
                data-aos="flip-left"
                data-aos-duration={1200}
              >
                <div className="card-body">
                  <div className="text-box">
                    <h3 className="title text-white font-stylish">
                      {props.pageData.header.header}
                    </h3>
                    <h6 className="subtitle text-white op-5">{props.pageData.text.text}</h6>{' '}
                    <Link
                      className="btn bg-white text-danger btn-rounded btn-md btn-arrow m-t-20"
                      to={props.pageData.buttonLink.buttonLink}
                    >
                      <span>
                        {props.pageData.buttonText.buttonText} <i className="ti-arrow-right" />
                      </span>
                    </Link>{' '}
                  </div>
                </div>
              </div>
            </div>
            {/* Column */}
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

CallToAction8.propTypes = {
  pageData: PropTypes.object.isRequired,
}

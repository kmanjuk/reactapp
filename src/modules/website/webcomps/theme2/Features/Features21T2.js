import React from 'react'
import PropTypes from 'prop-types'

export const Features21 = (props) => {
  try {
    return (
      <div className="spacer feature21 wrap-feature21-box" style={{}}>
        <div className="container">
          <div id="feature21-html">
            {/* Row  */}
            <div className="row text-white">
              {/* Column */}
              <div className="col-lg-5 col-md-6 both-space">
                <div className="aos-init" data-aos="fade-right" data-aos-duration={1200}>
                  {' '}
                  <h2 className="text-white m-t-20 m-b-30">{props.pageData.header.header}</h2>
                  <p className="op-8">{props.pageData.text.text}</p>{' '}
                  <a
                    className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                    data-bs-toggle="collapse"
                    href="#f21"
                  >
                    <span>
                      {props.pageData.button.button} <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
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

Features21.propTypes = {
  pageData: PropTypes.object.isRequired,
}

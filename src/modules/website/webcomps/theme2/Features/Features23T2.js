import React from 'react'
import PropTypes from 'prop-types'

export const Features23 = (props) => {
  return (
    <div className="spacer feature23 wrap-feature23-box" style={{}}>
      <div className="container">
        <div id="feature23-html">
          {/* Row */}
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7 text-center both-space">
              <div className="card aos-init" data-aos="flip-left" data-aos-duration={1200}>
                <div className="card-body">
                  <div className="text-box">
                    {' '}
                    <h3 className="title">{props.pageData.header.header}</h3>
                    <h6 className="subtitle">{props.pageData.text.text}</h6>{' '}
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                      data-bs-toggle="collapse"
                      href="#f23"
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
      </div>
    </div>
  )
}

Features23.propTypes = {
  pageData: PropTypes.object.isRequired,
}

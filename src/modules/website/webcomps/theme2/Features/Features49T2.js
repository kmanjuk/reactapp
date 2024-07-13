import React from 'react'
import PropTypes from 'prop-types'

export const Features49 = (props) => {
  try {
    return (
      <div className="spacer feature42 bg-success-gradiant">
        <div className="container">
          <div id="feature49-html">
            <div className="row justify-content-center wrap-feature49-box">
              <div className="col-md-10 col-lg-7 text-center aos-init" data-aos="fade-up">
                {' '}
                <h2 className="title text-white">{props.pageData.header.header}</h2>
                <h6 className="subtitle text-white op-7 m-b-20">
                  {props.pageData.text.text}{' '}
                  <a href="#f49" data-bs-toggle="collapse" className="white-link font-bold">
                    {props.pageData.link.link}
                    <i className="ti-arrow-right" />
                  </a>
                </h6>
                <a href="javascript:void(0)" className="m-b-20">
                  <img src={props.pageData.image1.image1} alt="image1" />
                </a>
                <a href="javascript:void(0)" className="m-b-20">
                  <img src={props.pageData.image2.image2} alt="image2" />
                </a>
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

Features49.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Features48 = (props) => {
  try {
    return (
      <div className="spacer feature48 bg-light" style={{}}>
        <div className="container">
          <div id="feature48-html">
            <div className="row wrap-feature48-box">
              <div className="col-lg-5 col-md-6 ms-auto">
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle m-b-40 m-t-20">
                  {props.pageData.text.text}
                  <a href="#f48" data-bs-toggle="collapse" className="linking">
                    {props.pageData.button.button} <i className="ti-arrow-right" />
                  </a>
                </h6>
                <a href="javascript:void(0)" className="m-b-20">
                  <img src={props.pageData.image1.image1} alt="Image1" />
                </a>
                <a href="javascript:void(0)" className="m-b-20">
                  <img src={props.pageData.image2.image2} alt="Image2" />
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

Features48.propTypes = {
  pageData: PropTypes.object.isRequired,
}

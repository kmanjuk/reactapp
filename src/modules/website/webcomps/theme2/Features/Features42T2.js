import React from 'react'
import PropTypes from 'prop-types'

export const Features42 = (props) => {
  try {
    return (
      <div className="spacer feature42" style={{}}>
        <div className="container">
          <div id="feature42-html">
            <div className="row justify-content-center wrap-feature42-box">
              <div className="col-md-10 col-lg-7 text-center aos-init" data-aos="fade-up">
                {' '}
                <h2 className="title text-white">{props.pageData.header.header}</h2>
                <h6 className="subtitle text-white op-7 m-b-20">
                  {props.pageData.text.text}
                  <br />{' '}
                  <a className="linking text-white" data-bs-toggle="collapse" href="#f42">
                    {props.pageData.learnmore.learnmore}
                    <i className="ti-arrow-right" />
                  </a>
                </h6>
                <a
                  href="javascript:void(0)"
                  className="text-success-gradiant display-4"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <i className={`icon-${props.pageData.icon.icon}`} />
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

Features42.propTypes = {
  pageData: PropTypes.object.isRequired,
}

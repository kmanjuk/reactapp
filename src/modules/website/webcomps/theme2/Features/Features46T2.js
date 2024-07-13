import React from 'react'
import PropTypes from 'prop-types'

export const Features46 = (props) => {
  try {
    return (
      <div className="spacer feature46 bg-light" style={{}}>
        <div className="container">
          <div id="feature46-html">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle m-b-40 m-t-20">{props.pageData.text.text}</h6>
                <div
                  className="card card-shadow aos-init"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <div className="card-body p-30">
                    <h6 className="font-medium">{props.pageData.title.title}</h6>
                    <p className="m-t-20">{props.pageData.titletext.titletext}</p>
                    <a href="#f46" data-bs-toggle="collapse" className="linking fw-normal">
                      {props.pageData.link.link}
                      <i className="ti-arrow-right text-success" />
                    </a>
                  </div>
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

Features46.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Features33 = (props) => {
  try {
    return (
      <div className="spacer feature33 b-t p-b-0">
        <div className="container">
          <div id="feature33-html">
            <div className="row wrap-feature-33">
              <div className="col-lg-6 align-self-center">
                {' '}
                <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                <p className="m-t-30">
                  {props.pageData.text.text}{' '}
                  <a className="linking" data-bs-toggle="collapse" href="#f33">
                    {props.pageData.learnmore.learnmore} <i className="ti-arrow-right" />
                  </a>
                </p>
                <div className="play-btn">
                  <span className="display-1">INTRO</span>
                  <a href="#" className="d-flex no-block align-items-center">
                    <span className="btn btn-circle btn-danger btn-md m-r-20 no-block d-flex align-items-center justify-content-center">
                      <i className="fa fa-play" />
                    </span>
                    Play the video
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={props.pageData.image.image}
                  alt="Image"
                  className="img-fluid aos-init"
                  data-aos="fade-up"
                  data-aos-duration={3000}
                  data-aos-offset={300}
                />
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

Features33.propTypes = {
  pageData: PropTypes.object.isRequired,
}

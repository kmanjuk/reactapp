import React from 'react'
import PropTypes from 'prop-types'

export const Features40 = (props) => {
  try {
    return (
      <div
        className="feature40 spacer wrap-feature40-box"
        style={{
          'background-image': props.pageData.image1.image1,
          // 'url(assets/images/features/feature40/img1.jpg), url(assets/images/features/feature40/img2.jpg)',
        }}
      >
        <div className="container">
          <div id="feature40-html">
            <div className="row">
              <div className="col-lg-6">
                <div className="card">
                  <div className="card-body">
                    {' '}
                    <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                    <p className="m-t-40 m-b-40">{props.pageData.text.text}</p>{' '}
                    <a
                      className="btn btn-info-gradiant btn-md btn-rounded btn-arrow"
                      data-bs-toggle="collapse"
                      href="#f40"
                    >
                      <span>
                        {props.pageData.learnmore.learnmore} <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {' '}
                <img
                  src={props.pageData.image3.image3}
                  alt="Image"
                  className="img-fluid rounded"
                />{' '}
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

Features40.propTypes = {
  pageData: PropTypes.object.isRequired,
}

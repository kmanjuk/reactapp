import React from 'react'
import PropTypes from 'prop-types'

export const Features36 = (props) => {
  try {
    return (
      <div
        className="spacer feature36 bg-light wrap-feature36-box"
        style={{ 'background-image': props.pageData.image.image }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              {' '}
              <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature36-html">
            <div className="row ">
              <div className="col-lg-8">
                <div className="row">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div key={index} className={`col-md-${item.sizemd.sizemd} m-t-40`}>
                        <h3 className="text-uppercase title stick-bottom">
                          {item.title.title}
                          <span className="bg-success-gradiant" />
                        </h3>
                        <p>{item.text.text}</p>{' '}
                        <a
                          className="btn btn-success-gradiant text-white btn-md btn-arrow m-t-20"
                          data-bs-toggle="collapse"
                          href="#f36"
                        >
                          <span>
                            {item.button.button} <i className="ti-arrow-right" />
                          </span>
                        </a>
                      </div>
                    ))}
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

Features36.propTypes = {
  pageData: PropTypes.object.isRequired,
}

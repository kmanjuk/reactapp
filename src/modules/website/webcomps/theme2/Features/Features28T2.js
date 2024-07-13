import React from 'react'
import PropTypes from 'prop-types'

export const Features28 = (props) => {
  try {
    return (
      <div className="feature28">
        <div id="feature28-html">
          <div className="wrap-feature-28 row">
            <div className="col-lg-6 bg-cover" style={{}} />
            <div className="col-lg-6">
              <div className="side-content both-space">
                <h2 className="title">{props.pageData.header.header}</h2>
                <p>{props.pageData.text.text}</p>
                <a
                  className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                  data-bs-toggle="collapse"
                  href="#f28"
                >
                  <span>
                    {props.pageData.arrowlabel.arrowlabel} <i className="ti-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-feature-28">
            <div className="row">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="side-content both-space text-end">
                  <span className="label label-info label-rounded">
                    {props.pageData.label.label}
                  </span>
                  <h2 className="title">{props.pageData.title.title}</h2>
                  <p>{props.pageData.text2.text2}</p>
                  <a
                    className="btn btn-info-gradiant btn-md btn-arrow m-t-20"
                    data-bs-toggle="collapse"
                    href="#f28"
                  >
                    <span>
                      {props.pageData.button.button} <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 bg-cover order-1 order-lg-2" style={{}} />
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

Features28.propTypes = {
  pageData: PropTypes.object.isRequired,
}

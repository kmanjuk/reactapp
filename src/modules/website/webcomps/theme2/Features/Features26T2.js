import React from 'react'
import PropTypes from 'prop-types'

export const Features26 = (props) => {
  try {
    return (
      <div className="spacer feature26">
        <div className="container">
          <div id="feature26-html">
            <div className="row wrap-feature-26">
              <div className="col-md-7 align-self-center">
                <div className="max-box">
                  {' '}
                  <h2 className="title m-t-20">{props.pageData.header.header}</h2>
                  <p className="m-t-30">{props.pageData.text1.text1}</p>
                  <p>{props.pageData.text2.text2}</p>
                  <a href="javascript:void(0)" className="linking">
                    {props.pageData.arrowlabel.arrowlabel} <i className="ti-arrow-right" />
                  </a>
                </div>
              </div>
              <div className="col-md-5 col-md-5">
                {' '}
                <img
                  src={props.pageData.image1.image1}
                  alt="FeatureImage1"
                  className="img-responsive"
                />{' '}
              </div>
            </div>
            <div className="row wrap-feature-26 m-t-40 p-t-30">
              <div className="col-md-6">
                {' '}
                <img
                  src={props.pageData.image2.image2}
                  alt="Featureimage2"
                  className="img-responsive"
                />{' '}
              </div>
              <div className="col-md-6 align-self-center">
                <span className="label label-info label-rounded">
                  {' '}
                  {props.pageData.label.label}
                </span>
                <h2 className="title m-t-20">{props.pageData.header2.header2}</h2>
                <p className="m-t-30">{props.pageData.text3.text3}</p>
                <p>{props.pageData.text4.text4}</p>
                <a className="linking" data-bs-toggle="collapse" href="#f26">
                  {props.pageData.arrowlabel2.arrowlabel2} <i className="ti-arrow-right" />
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

Features26.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

export const Features22 = (props) => {
  return (
    <div className="spacer feature22">
      <div className="container">
        {/* Row */}
        {props.pageData.headerRequired.headerRequired === '1' && (
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              {' '}
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.headerText.headerText}</h6>
            </div>
          </div>
        )}
        {/* Row */}
        <div className="wrap-feature-22">
          <div id="feature22-html">
            <div className="row">
              {/* Column */}
              <div className="col-lg-6 aos-init" data-aos="flip-up" data-aos-duration={1200}>
                {' '}
                <img
                  src={props.pageData.featureImage.featureImage}
                  className="rounded img-shadow img-responsive"
                  alt="feature22image"
                />{' '}
              </div>
              {/* Column */}
              <div className="col-lg-6 mt-3 mt-lg-0">
                <div className="text-box">
                  {' '}
                  <h3 className="font-light">{props.pageData.featureHeader.featureHeader}</h3>
                  <p>{parse(props.pageData.featureText.featureText)}</p>{' '}
                </div>
              </div>
              {/* Column */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features22.propTypes = {
  pageData: PropTypes.object.isRequired,
}

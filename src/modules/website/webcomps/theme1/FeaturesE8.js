import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE8 = ({ pageData }) => {
  return (
    <section className="space-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 08</h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing BOC */}
      <div className="container-fluid">
        <div className="yit-feature style-19 text-center mt-40">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-desktop etline-icon icon-medium mb-20 pink-color-text" />
                <h6 className="mb-10 font-xxsmall">HD Layout.</h6>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-eye etline-icon icon-medium mb-20 pink-color-text" />
                <h6 className="mb-10 font-xxsmall">Retina Display.</h6>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-palette etline-icon icon-medium mb-20 pink-color-text" />
                <h6 className="mb-10 font-xxsmall">Color Scheme</h6>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-vector themify-icon icon-medium mb-20 pink-color-text" />
                <h6 className="mb-10 font-xxsmall">Pixel Perfect</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing EOC */}
    </section>
  )
}

FeaturesE8.propTypes = {
  pageData: PropTypes.object.isRequired,
}

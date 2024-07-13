import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS7 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 07</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-11 mt-40 xs-icon-center">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-ruler-pencil icon-small mb-20" />
                <div className="yit-feature-content">
                  <h6 className="mb-10 font-xxsmall">Custom Design</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-files icon-small" />
                <div className="yit-feature-content">
                  <h6 className="mb-10 font-xxsmall">Detail Document</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-shortcode icon-small" />
                <div className="yit-feature-content pl-15">
                  <h6 className="mb-10 font-xxsmall">Customize Elements</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-dashboard  icon-small mb-20" />
                <div className="yit-feature-content">
                  <h6 className="mb-10 font-xxsmall">Performance</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-pencil  icon-small mb-20" />
                <div className="yit-feature-content">
                  <h6 className="mb-10 font-xxsmall">Edge Perfect</h6>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="ti-pie-chart  icon-small mb-20" />
                <div className="yit-feature-content">
                  <h6 className="mb-10 font-xxsmall">jQuery Elements</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Feature Listing EOC */}
      </div>
    </section>
  )
}

FeaturesS7.propTypes = {
  pageData: PropTypes.object.isRequired,
}

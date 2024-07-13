import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA5 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 05</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-23 text-left mt-40">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="ti-paint-bucket themify-icon icon-small mb-20 mr-20 pt-10 pink-color-text" />
                  <div className="yit-feature-content">
                    <h6 className="font-xxsmall">Nice Color Schme</h6>
                    <span className="font-xxxsmall alt-font grey-color-text font-weight-light">
                      Flat Color Graphic
                    </span>{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="ti-layers-alt themify-icon icon-small mb-20 mr-20 pt-10 pink-color-text" />
                <div className="yit-feature-content">
                  <h6 className="font-xxsmall">Flexible Layout</h6>
                  <span className="font-xxxsmall alt-font grey-color-text font-weight-light">
                    Edge Customize
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="ti-heart themify-icon icon-small mb-20 mr-20 pt-10 pink-color-text" />
                <div className="yit-feature-content">
                  <h6 className="font-xxsmall">Made With Love</h6>
                  <span className="font-xxxsmall alt-font grey-color-text font-weight-light">
                    Creative
                  </span>{' '}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="ti-vector themify-icon icon-small mb-20 mr-20 pt-10 pink-color-text" />
                <div className="yit-feature-content">
                  <h6 className="font-xxsmall">Pixel Perfect</h6>
                  <span className="font-xxxsmall alt-font grey-color-text font-weight-light">
                    Clean Sharpe
                  </span>{' '}
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

FeaturesA5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

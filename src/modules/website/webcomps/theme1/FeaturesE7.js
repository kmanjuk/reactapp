import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE7 = ({ pageData }) => {
  return (
    <section className="xs-no-space">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 07</h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing BOC */}
      <div className="container-fluid">
        <div className="yit-feature style-17 text-center mt-40">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item border-none pink-color-bg">
                <div className="yit-feature-content">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <i className="ti-crown icon-medium mb-20" />
                      <h6 className="mb-10 font-xxsmall">Creative Elements</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item border-none pink-color-bg">
                <div className="yit-feature-content">
                  <i className="ti-cup icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Unique Shortcode</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item border-none pink-color-bg">
                <div className="yit-feature-content">
                  <i className="ti-gift icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Friendly Support</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item border-none pink-color-bg">
                <div className="yit-feature-content">
                  <i className=" ti-bar-chart icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Unlimited Layouts</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing EOC */}
    </section>
  )
}

FeaturesE7.propTypes = {
  pageData: PropTypes.object.isRequired,
}

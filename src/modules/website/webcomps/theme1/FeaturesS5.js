import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS5 = ({ pageData }) => {
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
      </div>
      {/* /Feature Listing BOC */}
      <div className="container-fluid">
        <div className="yit-feature style-7 text-center mt-40">
          <div className="row no-gutter">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-focus etline-icon pink-color-text icon-small mb-20" />
                <h6 className="mb-10 font-xxsmall">Unlimited Shortcodes</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-grid etline-icon pink-color-text icon-small mb-20" />
                <h6 className="mb-10 font-xxsmall">Unlimited Features</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-adjustments etline-icon pink-color-text icon-small mb-20" />
                <h6 className="mb-10 font-xxsmall">Edge Customization</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-laptop etline-icon pink-color-text icon-small mb-20" />
                <h6 className="mb-10 font-xxsmall">True Responsiveness</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing EOC */}
    </section>
  )
}

FeaturesS5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

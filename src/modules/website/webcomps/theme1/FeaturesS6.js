import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS6 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 06</h5>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing BOC */}
      <div className="container">
        <div className="yit-feature style-1 text-center mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item white-color-bg img-shadow pad-20-all">
                <i className="icon-focus icon-small mb-20 icon-circle pink-color-bg" />
                <h6 className="mb-10 font-xxsmall">Unlimited Shortcodes</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item white-color-bg img-shadow pad-20-all">
                <i className="icon-grid icon-small mb-20 icon-circle pink-color-bg" />
                <h6 className="mb-10 font-xxsmall">Unlimited Features</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item white-color-bg img-shadow pad-20-all">
                <i className="icon-adjustments icon-small mb-20 icon-circle pink-color-bg" />
                <h6 className="mb-10 font-xxsmall">Edge Customization</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item white-color-bg img-shadow pad-20-all">
                <i className="icon-laptop icon-small mb-20 icon-circle pink-color-bg" />
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

FeaturesS6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

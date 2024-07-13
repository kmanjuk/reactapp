import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM4 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 04</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-9 mt-40 text-left">
          <div className="row no-gutter">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-ruler-alt themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Pixel Design</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-paint-roller themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Custom Color</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-r-none">
                <i className="ti-spray themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Clean Header</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none">
                <i className="ti-cut themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Custom Sections</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none">
                <i className="ti-palette themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Multicolor</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none border-r-none">
                <i className="ti-bolt themify-icon icon-small mb-20 text-center grey-color-text xs-icon-center" />
                <h6 className="mb-10 font-xxsmall">Powerful</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /Feature Listing EOC */}
      </div>
    </section>
  )
}

FeaturesM4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

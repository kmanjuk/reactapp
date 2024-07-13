import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM3 = ({ pageData }) => {
  return (
    <section className="light-medium-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 03</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-8 mt-40 text-center">
          <div className="row no-gutter">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-ruler-alt-2 themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Unique Design</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-view-grid themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Different Layout</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-r-none">
                <i className="ti-plug themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Service Styles</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none">
                <i className="ti-layout-slider-alt themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Portfolio Styles</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none">
                <i className="ti-shortcode  themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Niche Shortcodes</h6>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none border-r-none">
                <i className="ti-layers-alt themify-icon pink-color-bg icon-medium mb-20 icon-round" />
                <h6 className="mb-10 font-xxsmall">Niche Features</h6>
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

FeaturesM3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

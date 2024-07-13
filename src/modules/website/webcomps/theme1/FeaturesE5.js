import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE5 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 05</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-15 text-center mt-40">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="icon-scissors etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Taiolred Design</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
                <div className="yit-feature-hover pink-color-bg">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p className="alt-font">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                        omnis harum neque dignissimos laborum magni culpa tempora. dignissimos
                        laborum magni culpa tempora.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="icon-aperture etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Nice Shortcode</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
                <div className="yit-feature-hover pink-color-bg">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p className="alt-font">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                        omnis harum neque dignissimos laborum magni culpa tempora. dignissimos
                        laborum magni culpa tempora.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="icon-target etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Nice Feature</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
                <div className="yit-feature-hover pink-color-bg">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p className="alt-font">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                        omnis harum neque dignissimos laborum magni culpa tempora. dignissimos
                        laborum magni culpa tempora.{' '}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="icon-genius etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10 font-xxsmall">Semantic Code</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
                <div className="yit-feature-hover pink-color-bg">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p className="alt-font">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                        omnis harum neque dignissimos laborum magni culpa tempora. dignissimos
                        laborum magni culpa tempora.{' '}
                      </p>
                    </div>
                  </div>
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

FeaturesE5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

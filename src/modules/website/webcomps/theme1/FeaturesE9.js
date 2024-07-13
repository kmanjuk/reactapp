import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE9 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 09</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-33 text-center mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-grey-color-bg img-shadow pl-15 pr-15">
                <div className="yit-feature-content">
                  <div className="yit-display-centrize height-200">
                    <div className="yit-display-v-centrize">
                      <i className="icon-laptop pink-color-text font-medium mb-15" />
                      <h6 className="font-xxsmall">Front-End Development</h6>
                    </div>
                  </div>
                </div>
                <div className="yit-feature-hover pink-color-bg pad-20-all">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus
                        harum, saepe id explicabo eos reiciendis,error quas!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-grey-color-bg img-shadow pl-15 pr-15">
                <div className="yit-feature-content">
                  <div className="yit-display-centrize height-200">
                    <div className="yit-display-v-centrize">
                      <i className="icon-camera pink-color-text font-medium mb-15" />
                      <h6 className="font-xxsmall">UX Design</h6>
                    </div>
                  </div>
                </div>
                <div className="yit-feature-hover pink-color-bg pad-20-all">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus
                        harum, saepe id explicabo eos reiciendis,error quas!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-grey-color-bg img-shadow pl-15 pr-15">
                <div className="yit-feature-content">
                  <div className="yit-display-centrize height-200">
                    <div className="yit-display-v-centrize">
                      <i className="icon-presentation pink-color-text font-medium mb-15" />
                      <h6 className="font-xxsmall">Website Promotion</h6>
                    </div>
                  </div>
                </div>
                <div className="yit-feature-hover pink-color-bg pad-20-all">
                  <div className="yit-display-centrize">
                    <div className="yit-display-v-centrize">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus
                        harum, saepe id explicabo eos reiciendis,error quas!
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

FeaturesE9.propTypes = {
  pageData: PropTypes.object.isRequired,
}

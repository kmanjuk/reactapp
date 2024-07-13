import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA1 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 01</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-9 mt-40 text-center">
          <div className="row no-gutter">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-tools etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Web Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-grey-color-bg">
                <i className="icon-laptop etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Web Development</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-r-none">
                <i className="icon-pictures etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Branding</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none light-grey-color-bg">
                <i className="icon-strategy etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">SEO</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none">
                <i className="icon-tablet etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">App Developer</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item border-b-none border-r-none light-grey-color-bg">
                <i className="icon-chat etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Support</h6>
                <p>
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

FeaturesA1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

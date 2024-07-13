import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA4 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 04</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-21 mt-40 tetx-left last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="ti-clipboard icon-small mb-20 mr-20 pt-10" />
                  <span className="font-xxxsmall grey-color-text font-weight-light">
                    Discussion
                  </span>
                  <h6 className="mb-10 font-xxsmall">Requirement</h6>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-layout icon-small mb-20 mr-20 pt-10" />
                <span className="font-xxxsmall grey-color-text font-weight-light">
                  Tailored Solution
                </span>
                <h6 className="mb-10 font-xxsmall">Custom Mockup</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="ti-comment-alt icon-small mb-20 mr-20 pt-10" />
                <span className="font-xxxsmall grey-color-text font-weight-light">Live Help</span>
                <h6 className="mb-10 font-xxsmall">365 Support</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.{' '}
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

FeaturesA4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

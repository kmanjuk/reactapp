import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE3 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 03</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-12 text-center mt-40">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="ti-eye pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">User Friendly Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="ti-layout-width-default pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Open Layout Design</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="ti-dashboard pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Performance</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni
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

FeaturesE3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

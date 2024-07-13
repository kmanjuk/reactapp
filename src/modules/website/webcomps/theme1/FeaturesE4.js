import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE4 = ({ pageData }) => {
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
        <div className="yit-feature style-13 text-center mt-40">
          <div className="row">
            <div className="col-xl-4 col-md-4 col-sm-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                {' '}
                <i className="icon-mobile etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Device Compatibility</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="icon-search etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">SEO Friendly</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 col-sm-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="icon-documents etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Online Document</h6>
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

FeaturesE4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

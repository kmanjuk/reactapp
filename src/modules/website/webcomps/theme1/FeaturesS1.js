import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS1 = ({ pageData }) => {
  return (
    <section className="light-medium-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 01</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-1 mt-40 last-p-none">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-pencil etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10">Web Design</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-browser etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10">Web Development</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-adjustments etline-icon pink-color-text icon-medium mb-20" />
                  <h6 className="mb-10">UI Design</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
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

FeaturesS1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

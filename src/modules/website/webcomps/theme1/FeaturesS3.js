import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS3 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 03</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-3 mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-pencil etline-icon pink-color-text icon-small mb-20 mt-5" />
                <div className="yit-feature-content pl-20">
                  <h6 className="mb-10">Pixel Perfect Design</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-browser etline-icon pink-color-text icon-small mb-20 mt-5" />
                <div className="yit-feature-content pl-20">
                  <h6 className="mb-10">Document</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-adjustments etline-icon pink-color-text icon-small mb-20 mt-5" />
                <div className="yit-feature-content pl-20">
                  <h6 className="mb-10">Reasonable Pricing</h6>
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

FeaturesS3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

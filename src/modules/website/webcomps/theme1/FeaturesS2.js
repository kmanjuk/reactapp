import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS2 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 02</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-1 mt-40 text-center last-p-none">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-tools etline-icon pink-color-bg icon-circle icon-small mb-20" />
                  <h6 className="mb-10">We're Creative</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-browser etline-icon pink-color-bg icon-circle icon-small mb-20" />
                  <h6 className="mb-10">We're Developer</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.{' '}
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="yit-feature-item">
                  <i className="icon-mobile etline-icon pink-color-bg icon-circle icon-small mb-20" />
                  <h6 className="mb-10">We're App Geek</h6>
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

FeaturesS2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

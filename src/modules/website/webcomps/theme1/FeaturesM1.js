import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM1 = ({ pageData }) => {
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
        <div className="yit-feature style-4 text-center mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-tools etline-icon pink-color-bg icon-circle icon-medium mb-20" />
                <a href="Javascript:void(0)" title="Web Design">
                  <h6 className="mb-10 font-xxsmall">Web Design</h6>
                </a>
                <hr className="width-30 height-1" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-gears etline-icon pink-color-bg icon-circle icon-medium mb-20" />
                <a href="Javascript:void(0)" title="Web Development">
                  <h6 className="mb-10 font-xxsmall">Web Development</h6>
                </a>
                <hr className="width-30 height-1" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <i className="icon-linegraph etline-icon pink-color-bg icon-circle icon-medium mb-20" />
                <a href="Javascript:void(0)" title="Internet Marketing">
                  <h6 className="mb-10 font-xxsmall">Internet Marketing</h6>
                </a>
                <hr className="width-30 height-1" />
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

FeaturesM1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

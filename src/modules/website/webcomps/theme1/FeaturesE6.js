import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE6 = ({ pageData }) => {
  return (
    <section className="primary-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 06</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-16 text-center mt-40">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-edit etline-icon icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Web Design</h6>
                <hr className="width-30 height-3 grey-color-bg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-desktop etline-icon icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Web Development</h6>
                <hr className="width-30 height-3 grey-color-bg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-linegraph etline-icon icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Internet Marketing</h6>
                <hr className="width-30 height-3 grey-color-bg" />
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

FeaturesE6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

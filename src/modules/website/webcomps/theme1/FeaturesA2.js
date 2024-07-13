import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA2 = ({ pageData }) => {
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
        <div className="yit-feature style-10 mt-40 text-center">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                {' '}
                <i className="icon-pricetags etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Different Layout Type</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                {' '}
                <i className="icon-heart etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Make it Love</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                {' '}
                <i className="icon-layers etline-icon pink-color-text icon-medium mb-20" />
                <h6 className="mb-10 font-xxsmall">Testing for Perfection</h6>
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

FeaturesA2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

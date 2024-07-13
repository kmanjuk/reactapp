import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM2 = ({ pageData }) => {
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
                <i className="icon-presentation etline-icon pink-color-bg icon-medium mb-20 icon-circle" />
                <h6 className="mb-10 font-xxsmall">Different Layout Type</h6>
                <hr className="width-30 height-2 pink-color-bg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="icon-heart etline-icon pink-color-bg icon-medium mb-20 icon-circle" />
                <h6 className="mb-10 font-xxsmall">Make it Love</h6>
                <hr className="width-30 height-2 pink-color-bg" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item pink-color-border white-color-bg">
                <i className="icon-trophy etline-icon pink-color-bg icon-medium mb-20 icon-circle" />
                <h6 className="mb-10 font-xxsmall">Awward Wining</h6>
                <hr className="width-30 height-2 pink-color-bg" />
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

FeaturesM2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

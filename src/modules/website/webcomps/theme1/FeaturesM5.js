import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM5 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center">Style 05</h5>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-24 text-center mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-pencil etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Web Design">
                  <h6 className="mb-10 font-xxsmall">Web Design</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-gears etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Web Development">
                  <h6 className="mb-10 font-xxsmall">Web Development</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-wallet etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Ecommerce">
                  <h6 className="mb-10 font-xxsmall">Ecommerce</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-genius etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Internet Marketing">
                  <h6 className="mb-10 font-xxsmall">Internet Marketing</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-linegraph etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Hosting">
                  <h6 className="mb-10 font-xxsmall">Hosting</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg">
                <i className="icon-envelope etline-icon icon-medium mb-20 pink-color-bg" />{' '}
                <a href="Javascript:void(0)" title="Support">
                  <h6 className="mb-10 font-xxsmall">Support</h6>
                </a>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font">
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

FeaturesM5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

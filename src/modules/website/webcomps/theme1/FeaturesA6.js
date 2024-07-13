import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA6 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center">Style 06</h5>
          </div>
        </div>
        <div className="yit-feature style-25 text-left mt-40">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  01
                </span>
                <h6 className="mb-10 font-xxsmall">Analysis</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  02
                </span>
                <h6 className="mb-10 font-xxsmall">Design</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  03
                </span>
                <h6 className="mb-10 font-xxsmall">Development</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  04
                </span>
                <h6 className="mb-10 font-xxsmall">Testing</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  05
                </span>
                <h6 className="mb-10 font-xxsmall">Deploy</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 grey-color-text font-italic font-weight-regular">
                  06
                </span>
                <h6 className="mb-10 font-xxsmall">Support</h6>
                <hr className="width-20 height-1 grey-color-bg yit-seprator-l" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesA6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

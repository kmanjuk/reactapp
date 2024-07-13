import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA3 = ({ pageData }) => {
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
        <div className="yit-feature style-21 mt-40 text-left last-p-none">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <div className="yit-feature-content">
                  <i className="icon-tools etline-icon icon-small mb-20 mr-20" />
                  <h6 className="mb-10 font-xxsmall">Unique design</h6>
                </div>
                <p className="grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-pricetags etline-icon icon-small mb-20 mr-20" />
                <h6 className="mb-10 font-xxsmall">Open Layout</h6>
                <p className="grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-focus etline-icon icon-small mb-20 mr-20" />
                <h6 className="mb-10 font-xxsmall">Simple</h6>
                <p className="grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item">
                <i className="icon-lightbulb etline-icon icon-small mb-20 mr-20" />
                <h6 className="mb-10 font-xxsmall">Creative Idea</h6>
                <p className="grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos.{' '}
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

FeaturesA3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

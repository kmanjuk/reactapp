import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesCH1 = ({ pageData }) => {
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
        <div className="yit-feature style-2 text-center mt-40">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-tools pink-color-text etline-icon icon-medium mb-20" />{' '}
                <a href="Javascript:void(0)" title="Web Design">
                  <h6 className="mb-10 font-xxsmall">Web Design</h6>
                </a>
                <hr className="width-20 height-1" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius ullam deleniti
                  debitis in non dolorem tempora, eveniet dicta ex esse quo nisi quaerat repellendus
                  culpa sapiente necessitatibus impedit, vitae.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-browser pink-color-text etline-icon icon-medium mb-20" />{' '}
                <a href="Javascript:void(0)" title="Web Development">
                  <h6 className="mb-10 font-xxsmall">Web Developement</h6>
                </a>
                <hr className="width-20 height-1" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius ullam deleniti
                  debitis in non dolorem tempora, eveniet dicta ex esse quo nisi quaerat repellendus
                  culpa sapiente necessitatibus impedit, vitae.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-target pink-color-text etline-icon icon-medium mb-20" />{' '}
                <a href="Javascript:void(0)" title="Branding">
                  <h6 className="mb-10 font-xxsmall">Branding</h6>
                </a>
                <hr className="width-20 height-1" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius ullam deleniti
                  debitis in non dolorem tempora, eveniet dicta ex esse quo nisi quaerat repellendus
                  culpa sapiente necessitatibus impedit, vitae.
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

FeaturesCH1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

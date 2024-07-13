import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesE2 = ({ pageData }) => {
  return (
    <section className="pink-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center">Style 02</h5>
          </div>
        </div>
        <div className="yit-feature style-6 text-center mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                {' '}
                <i className="icon-mobile icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">Responsive</h6>
                <hr className="width-20 height-1 white-color-bg" />
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
                <i className="icon-desktop icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">HD Layout</h6>
                <hr className="width-20 height-1 white-color-bg" />
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
                <i className="icon-scissors icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">Customize Code</h6>
                <hr className="width-20 height-1 white-color-bg" />
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
                <i className="icon-chat icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">Live Support</h6>
                <hr className="width-20 height-1 white-color-bg" />
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
                <i className="icon-documents icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">Well Documentation</h6>
                <hr className="width-20 height-1 white-color-bg" />
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
                <i className="icon-layers icon-medium mb-20 icon-border white-color-border" />
                <h6 className="mb-10 font-xxsmall">Awesome Shortcode</h6>
                <hr className="width-20 height-1 white-color-bg" />
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius ullam deleniti
                  debitis in non dolorem tempora, eveniet dicta ex esse quo nisi quaerat repellendus
                  culpa sapiente necessitatibus impedit, vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesE2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

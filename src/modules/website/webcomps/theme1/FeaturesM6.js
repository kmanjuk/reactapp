import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM6 = ({ pageData }) => {
  return (
    <section
      className="bg-overlay"
      style={{
        'background-image': 'url("images/webpanda-bg-26.jpg")',
        'background-position': '0% 130.5px',
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center white-color-text">Style 06</h5>
          </div>
        </div>
      </div>
      {/* /Feature Listing BOC */}
      <div className="container-fluid">
        <div className="yit-feature style-28 text-center mt-40 white-color-text">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item bg-dark-light-transparent pad-20-all border-style-double pink-color-border sm-height-auto">
                <span className="icon-medium mb-20 pink-color-text font-italic">01</span>
                <h6 className="mb-10 font-xxsmall">Analysis</h6>
                <span className="font-xxxsmall grey-color-text">Understand Requirement</span>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item bg-dark-light-transparent pad-20-all border-style-double pink-color-border sm-height-auto">
                <span className="icon-medium mb-20 pink-color-text font-italic">02</span>
                <h6 className="mb-10 font-xxsmall">Design</h6>
                <span className="font-xxxsmall grey-color-text">Desire Mockup</span>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item bg-dark-light-transparent pad-20-all border-style-double pink-color-border sm-height-auto">
                <span className="icon-medium mb-20 pink-color-text font-italic">03</span>
                <h6 className="mb-10 font-xxsmall">Development</h6>
                <span className="font-xxxsmall grey-color-text">Technology Stack</span>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="yit-feature-item bg-dark-light-transparent pad-20-all border-style-double pink-color-border sm-height-auto">
                <span className="icon-medium mb-20 pink-color-text font-italic">04</span>
                <h6 className="mb-10 font-xxsmall">Testing</h6>
                <span className="font-xxxsmall grey-color-text">Serve Quality</span>
                <hr className="width-30 height-1 grey-color-bg" />
                <p className="alt-font grey-color-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Feature Listing EOC */}
    </section>
  )
}

FeaturesM6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

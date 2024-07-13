import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesM7 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center">Style 07</h5>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-29 text-left mt-40 last-p-none">
          <div className="row no-gutter">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-medium-grey-color-bg pad-25-all">
                {' '}
                <span className="icon-medium mb-20 alt-font grey-color-text yit-display-tb-cell pr-20">
                  01
                </span>
                <div className="yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall yit-display-tb-cell">We're Creative</h6>
                  <span className="font-xxxsmall grey-color-text alt-font">
                    Hybird Designer
                  </span>{' '}
                </div>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item white-color-bg pad-25-all">
                {' '}
                <span className="icon-medium mb-20 alt-font grey-color-text yit-display-tb-cell pr-20">
                  02
                </span>
                <div className="yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall yit-display-tb-cell">We're Professional</h6>
                  <span className="font-xxxsmall grey-color-text alt-font">
                    Expert Developer
                  </span>{' '}
                </div>
                <p className="alt-font">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                  harum neque dignissimos laborum magni culpa tempora.{' '}
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item light-extra-grey-color-bg pad-25-all">
                {' '}
                <span className="icon-medium mb-20 alt-font grey-color-text yit-display-tb-cell pr-20">
                  03
                </span>
                <div className="yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall yit-display-tb-cell">We're Friendly</h6>
                  <span className="font-xxxsmall grey-color-text alt-font">
                    Global Suppoter
                  </span>{' '}
                </div>
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

FeaturesM7.propTypes = {
  pageData: PropTypes.object.isRequired,
}

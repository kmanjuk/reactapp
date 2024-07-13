import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesA8 = ({ pageData }) => {
  return (
    <section className="space-grey-light-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-center">Style 08</h5>
          </div>
        </div>
        <div className="yit-feature style-27 text-left mt-40 last-p-none">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 alt-font pink-color-text yit-display-tb-cell pr-20">
                  01
                </span>
                <div className="yit-feature-content yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall">Discovery Explore</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 alt-font pink-color-text yit-display-tb-cell pr-20">
                  02
                </span>
                <div className="yit-feature-content yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall">Geek Expert</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4">
              <div className="yit-feature-item">
                <span className="icon-medium mb-20 alt-font pink-color-text yit-display-tb-cell pr-20">
                  03
                </span>
                <div className="yit-feature-content yit-display-tb-cell">
                  <h6 className="mb-10 font-xxsmall">Global Work</h6>
                  <p className="alt-font">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor,
                    omnis harum neque dignissimos laborum magni culpa tempora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

FeaturesA8.propTypes = {
  pageData: PropTypes.object.isRequired,
}

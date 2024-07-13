import React from 'react'
import PropTypes from 'prop-types'

export const FeaturesS4 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Style 04</h5>
            </div>
          </div>
        </div>
        {/* /Feature Listing BOC */}
        <div className="yit-feature style-5 mt-40 sm-display-tb-cell last-p-none">
          <div className="yit-feature-item">
            <div className="yit-display-tb-cell">
              {' '}
              <span className="pink-color-bg icon-badge icon-circle icon-small alt-font">
                01
              </span>{' '}
            </div>
            <div className="yit-display-tb-cell pt-10">
              <h6 className="font-xxsmall">Elegant Design</h6>
              <p className="alt-font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                harum neque dignissimos laborum magni culpa tempora.{' '}
              </p>
            </div>
          </div>
          <div className="yit-feature-item">
            <div className="yit-display-tb-cell">
              {' '}
              <span className="pink-color-bg icon-badge icon-circle icon-small alt-font">
                02
              </span>{' '}
            </div>
            <div className="yit-display-tb-cell pt-10">
              <h6 className="font-xxsmall">Different Layout Type</h6>
              <p className="alt-font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                harum neque dignissimos laborum magni culpa tempora.{' '}
              </p>
            </div>
          </div>
          <div className="yit-feature-item">
            <div className="yit-display-tb-cell">
              {' '}
              <span className="pink-color-bg icon-badge icon-circle icon-small alt-font">
                03
              </span>{' '}
            </div>
            <div className="yit-display-tb-cell pt-10">
              <h6 className="font-xxsmall">True Responsiveness</h6>
              <p className="alt-font">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima quos dolor, omnis
                harum neque dignissimos laborum magni culpa tempora.{' '}
              </p>
            </div>
          </div>
        </div>
        {/* /Feature Listing EOC */}
      </div>
    </section>
  )
}

FeaturesS4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

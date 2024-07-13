import React from 'react'
import PropTypes from 'prop-types'

export const CallToActionT2 = ({ pageData }) => {
  return (
    <section className="space-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-xl-8 d-flex align-items-center">
            <div className="yit-cta">
              <h6>The most powerful boostrap4 template ever on the market</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-xl-4">
            <a
              href="mailto:enqiry@yankeeinfoweb.com"
              title="Purchase Now"
              className="btn btn-radius btn-block"
            >
              Purchase Now <i className="fa fa-download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToActionT2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

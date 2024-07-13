import React from 'react'
import PropTypes from 'prop-types'

export const CallToActionT5 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="yit-cta light-grey-color-bg pad-25-all text-center border-top-only pink-color-border">
              <h6> WebPanda: The most powerful template ever on the market</h6>
              <p>
                Create tailor-cut websites with the exclusive multi-purpose responsive template
                along with powerful features.
              </p>
              <a
                href="mailto:enqiry@yankeeinfoweb.com"
                title="Purchase Now"
                className="btn btn-radius"
              >
                Purchase Now <i className="fa fa-download" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

CallToActionT5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

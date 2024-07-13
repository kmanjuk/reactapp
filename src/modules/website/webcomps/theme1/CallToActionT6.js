import React from 'react'
import PropTypes from 'prop-types'

export const CallToActionT6 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="yit-cta pad-25-all text-left yit-display-table width-full mb-30"
              style={{
                'background-image': 'url(images/bg-items/bg-pattern-10.png)',
              }}
            >
              <div className="yit-display-tb-cell display-center-mob">
                <h6> WebPanda: The most powerful template ever on the market</h6>
                <p>
                  Create tailor-cut websites with the exclusive multi-purpose responsive template
                  along with powerful features.
                </p>
              </div>
              <div className="yit-display-tb-cell display-center-mob">
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
      </div>
    </section>
  )
}

CallToActionT6.propTypes = {
  pageData: PropTypes.object.isRequired,
}

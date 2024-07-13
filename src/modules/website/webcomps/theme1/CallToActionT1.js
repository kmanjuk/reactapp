import React from 'react'
import PropTypes from 'prop-types'

export const CallToActionT1 = ({ pageData }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="yit-cta text-center">
              <h5> WebPanda : The most powerful boostrap4 template ever on the market</h5>
              <hr />
              <a
                href="mailto:enqiry@yankeeinfoweb.com"
                title="Purchase Now"
                className="btn btn-rounded mt-20"
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

CallToActionT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

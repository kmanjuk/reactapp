import React from 'react'
import PropTypes from 'prop-types'

export const AboutUsT1 = ({ pageData }) => {
  return (
    <section
      className="theme1-webp-about-us theme1-wow theme1-fadeIn"
      data-wow-delay=".5s"
      data-component="Theme1Hero"
      style={{
        visibility: 'visible',
        '-webkit-animation-delay': '0.5s',
        'animation-delay': '0.5s',
        '-webkit-animation-name': '_fadeIn',
        'animation-name': '_fadeIn',
      }}
    >
      <div className="theme1-container">
        <div className="theme1-row">
          <div className="theme1-col">
            <div className="theme1-text-center theme1-last-p-none">
              <h6 className="theme1-font-xxsmall theme1-text-uppercase theme1-letter-spacing-2">
                {pageData.content.content.header}
              </h6>
              <hr className="theme1-pink-color-bg" />
              <h1 className="theme1-font-large theme1-font-weight-bold theme1-mt-10 theme1-fadeInUp">
                {pageData.content.content.title}
              </h1>
              <p
                className="theme1-alt-font theme1-mt-10 theme1-yit-lead fadeInUp"
                data-wow-delay="1s"
              >
                {pageData.content.content.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutUsT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

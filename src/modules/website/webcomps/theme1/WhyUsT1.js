import React from 'react'
import PropTypes from 'prop-types'

export const WhyUsT1 = ({ pageData }) => {
  return (
    <section
      className="theme1-webp-why theme1-section-v-space theme1-section-h-space"
      data-component="Theme1Content1"
    >
      <div className="theme1-container-fluid">
        <div className="theme1-row theme1-no-gutters">
          <div className="theme1-col-xl-6 theme1-col-md-12 theme1-col-lg-12">
            <div
              className="theme1-webp-home1-why-img theme1-parallax-bg theme1-height-full theme1-md-parallax-bg"
              data-stellar-background-ratio="0.8"
              style={{
                'background-image': `url(${pageData.content.content.image})`,
                'background-position': '0% -0.025px',
              }}
            />
          </div>
          <div className="theme1-col-xl-6 theme1-col-md-12 theme1-col-lg-12">
            <div className="theme1-pad-100-all theme1-xs-pad-small theme1-light-grey-color-bg">
              <h2 className="theme1-font-weight-bold">{pageData.content.content.title}</h2>
              <hr className="theme1-pink-color-bg theme1-yit-seprator-l" />
              <p className="theme1-alt-font theme1-mt-10">{pageData.content.content.text}</p>
              <div className="theme1-yit-feature theme1-style-1 theme1-last-p-none">
                <div className="theme1-row">
                  {pageData.content.content.cards.length > 0 &&
                    pageData.content.content.cards.map((card, cardIndex) => (
                      <div
                        key={cardIndex}
                        className="theme1-col-lg-4 theme1-col-xl-4 theme1-col-md-4"
                      >
                        <div className="theme1-yit-feature-item theme1-fadeInUp">
                          <i
                            className={`${card.icon} theme1-etline-icon theme1-pink-color-text theme1-icon-medium theme1-mb-20`}
                          />
                          <h6 className="theme1-mb-10 theme1-font-xxsmall">{card.title}</h6>
                          <p>{card.text}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

WhyUsT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Features1T2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="theme2-bg-light theme2-spacer theme2-feature1">
        <div className="theme2-container">
          {/* Row  */}
          <div className="theme2-row theme2-justify-content-center">
            <div className="theme2-col-lg-7 theme2-col-md-9 theme2-text-center">
              <h2 className="theme2-title">{props.pageData.content.content.header}</h2>
              <h6 className="theme2-subtitle">{props.pageData.content.content.text}</h6>
            </div>
          </div>
          <div id="feature1-html">
            {/* Row  */}
            <div className="theme2-row theme2-m-t-40 theme2-justify-content-center">
              {/* Column */}
              {props.pageData.content.content.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="theme2-col-lg-4 theme2-col-md-6 theme2-wrap-feature1-box"
                >
                  <div
                    className="theme2-card theme2-card-shadow aos-init"
                    data-aos={`fade-${
                      cardIndex === 0
                        ? 'right'
                        : cardIndex === props.pageData.content.content.cards.length - 1
                          ? 'left'
                          : 'up'
                    }`}
                    data-aos-duration={1200}
                  >
                    <div className="theme2-card-body theme2-text-center">
                      <div className="theme2-icon-space">
                        <i className={`fa fa-${card.icon} fa-3x`}></i>
                      </div>
                      <h5 className="theme2-font-medium">{card.header}</h5>
                      <p className="theme2-m-t-20">{card.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features1T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

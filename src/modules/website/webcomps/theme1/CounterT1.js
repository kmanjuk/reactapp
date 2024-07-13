import React from 'react'
import PropTypes from 'prop-types'

export const CounterT1 = ({ pageData }) => {
  return (
    <section>
      <div className="theme1-container">
        <div className="theme1-row">
          <div className="theme1-col">
            <div className="theme1-text-center">
              <h5>{pageData.content.content.title}</h5>
            </div>
          </div>
        </div>
        <div
          className="theme1-yit-counter theme1-style-1 theme1-text-center theme1-mt-40 theme1-counter-box theme1-last-p-none"
          id="counter"
          data-type="background"
          data-speed={4}
        >
          <div className="theme1-row">
            {pageData.content.content.stats.length > 0 &&
              pageData.content.content.stats.map((stat, statIndex) => (
                <div
                  key={statIndex}
                  className="theme1-col-xl-3 theme1-col-lg-3 theme1-col-md-3 theme1-wow theme1-fadeInLeft"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: 'visible',
                    '-webkit-animation-delay': '0.2s',
                    'animation-delay': '0.2s',
                    '-webkit-animation-name': '_fadeInLeft',
                    'animation-name': '_fadeInLeft',
                  }}
                >
                  <div className="theme1-yit-counter-item">
                    <i
                      className={`${stat.icon} theme1-etline-icon theme1-icon-medium theme1-mb-20`}
                    />
                    <h5 className="theme1-counter" id="data-1" data-count={200}>
                      {stat.number}
                    </h5>
                    <p>{stat.text}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

CounterT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

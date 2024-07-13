import React from 'react'
import PropTypes from 'prop-types'

export const CounterT3 = ({ pageData }) => {
  return (
    <section className="space-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Counter Style 03</h5>
            </div>
          </div>
        </div>
        {/* /Counter Listing BOC */}
        <div
          className="yit-counter style-3 text-center mt-40 counter-box last-p-none"
          id="counter"
          data-type="background"
          data-speed={4}
        >
          <div className="row">
            <div
              className="col-xl-3 col-lg-3 col-md-3 wow fadeInLeft"
              data-wow-delay="0.2s"
              style={{
                visibility: 'visible',
                '-webkit-animation-delay': '0.2s',
                'animation-delay': '0.2s',
                '-webkit-animation-name': '_fadeInLeft',
                'animation-name': '_fadeInLeft',
              }}
            >
              <div className="yit-counter-item black-color-bg pad-30-all border-bottm-only pink-color-border border-width-2">
                <i className="icon-happy etline-icon icon-medium mb-20 icon-border pink-color-border icon-circle" />
                <h5 className="counter" id="data-1" data-count={400}>
                  400
                </h5>
                <p>Projects</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-3 wow fadeInLeft"
              data-wow-delay="0.4s"
              style={{
                visibility: 'visible',
                '-webkit-animation-delay': '0.4s',
                'animation-delay': '0.4s',
                '-webkit-animation-name': '_fadeInLeft',
                'animation-name': '_fadeInLeft',
              }}
            >
              <div className="yit-counter-item black-color-bg pad-30-all border-bottm-only pink-color-border border-width-2">
                <i className="icon-profile-male etline-icon icon-medium mb-20 icon-border pink-color-border icon-circle" />
                <h5 className="counter" id="data-2" data-count={30}>
                  30
                </h5>
                <p>Year Experiece</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-3 wow fadeInLeft"
              data-wow-delay="0.6s"
              style={{
                visibility: 'visible',
                '-webkit-animation-delay': '0.6s',
                'animation-delay': '0.6s',
                '-webkit-animation-name': '_fadeInLeft',
                'animation-name': '_fadeInLeft',
              }}
            >
              <div className="yit-counter-item black-color-bg pad-30-all border-bottm-only pink-color-border border-width-2">
                <i className="icon-bargraph etline-icon icon-medium mb-20 icon-border pink-color-border icon-circle" />
                <h5 className="counter" id="data-3" data-count={300}>
                  300
                </h5>
                <p>Professional Team</p>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-3 col-md-3 wow fadeInLeft"
              data-wow-delay="0.8s"
              style={{
                visibility: 'visible',
                '-webkit-animation-delay': '0.8s',
                'animation-delay': '0.8s',
                '-webkit-animation-name': '_fadeInLeft',
                'animation-name': '_fadeInLeft',
              }}
            >
              <div className="yit-counter-item black-color-bg pad-30-all border-bottm-only pink-color-border border-width-2">
                <i className="icon-camera etline-icon icon-medium mb-20 icon-border pink-color-border icon-circle" />
                <h5 className="counter" id="data-4" data-count={700}>
                  700
                </h5>
                <p>Happy Client</p>
              </div>
            </div>
          </div>
        </div>
        {/* /Counter Listing EOC */}
      </div>
    </section>
  )
}

CounterT3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const CounterT2 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h5>Counter Style 02</h5>
            </div>
          </div>
        </div>
        {/* /Counter Listing BOC */}
        <div
          className="yit-counter style-2 text-center mt-40 counter-box"
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
              <div className="yit-counter-item">
                <i className="icon-happy etline-icon icon-medium mb-20 icon-circle pink-color-bg" />
                <h5 className="counter" id="data-1" data-count={500}>
                  500
                </h5>
                <hr className="width-20 heigt-1 grey-color-bg" />
                <h6 className="font-weight-medium">Projects</h6>
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
              <div className="yit-counter-item">
                <i className="icon-profile-male etline-icon icon-medium mb-20 icon-circle pink-color-bg" />
                <h5 className="counter" id="data-2" data-count={30}>
                  30
                </h5>
                <hr className="width-20 heigt-1 grey-color-bg" />
                <h6 className="font-weight-medium">Year Experience</h6>
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
              <div className="yit-counter-item">
                <i className="icon-bargraph etline-icon icon-medium mb-20 icon-circle pink-color-bg" />
                <h5 className="counter" id="data-3" data-count={300}>
                  300
                </h5>
                <hr className="width-20 heigt-1 grey-color-bg" />
                <h6 className="font-weight-medium">Professional Team</h6>
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
              <div className="yit-counter-item">
                <i className="icon-camera etline-icon icon-medium mb-20 icon-circle pink-color-bg" />
                <h5 className="counter" id="data-4" data-count={700}>
                  700
                </h5>
                <hr className="width-20 heigt-1 grey-color-bg" />
                <h6 className="font-weight-medium">Happy Clients</h6>
              </div>
            </div>
          </div>
        </div>
        {/* /Counter Listing EOC */}
      </div>
    </section>
  )
}

CounterT2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

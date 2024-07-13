import React from 'react'
import PropTypes from 'prop-types'

export const CallToActionT3 = ({ pageData }) => {
  return (
    <section className="light-grey-color-bg">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="text-center">
              <h6 className="mb-20">The most powerful boostrap4 template ever on the market</h6>
              <a
                href="mailto:enqiry@yankeeinfoweb.com"
                title="Purchase Now"
                className="btn btn-rounded btn-center"
              >
                Purchase Now <i className="fa fa-download" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img
              src="images/screen-show/section-screen-img-2.png"
              alt="WebPanda Screenshow Thumbnail"
              className="yit-img-center data-parallax-effect"
              data-parallax='{"y": 60}'
              width={1311}
              height={848}
              data-no-retina
              style={{
                '-webkit-transform':
                  'translate3d(0px, 34.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                '-ms-transform':
                  'translate3d(0px, 34.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
                transform:
                  'translate3d(0px, 34.01px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

CallToActionT3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

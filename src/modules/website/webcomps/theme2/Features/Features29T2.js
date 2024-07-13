import React from 'react'
import PropTypes from 'prop-types'

export const Features29 = (props) => {
  try {
    return (
      <div className="spacer bg-success-gradiant feature29 p-b-0">
        <div className="container wrap-feature-29">
          <div id="feature29-html">
            {/* Row */}
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-9 text-center">
                {' '}
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle">{props.pageData.text.text}</h6>
                <a
                  href="javascript:void(0)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className="btn btn-outline-light btn-rounded m-t-20 m-r-10"
                >
                  Watch video{' '}
                  <span className="btn-devider">
                    <i className="fa fa-play" />
                  </span>
                </a>
                <a
                  href="#f29"
                  data-bs-toggle="collapse"
                  className="btn btn-outline-light btn-rounded m-t-20"
                >
                  View Code{' '}
                  <span className="btn-devider">
                    <i className={`ti-${props.pageData.button.button}`} />
                  </span>
                </a>
                <div className="modal fade" id="exampleModal">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Watch video</h5>
                        <button
                          type="button"
                          className="close bg-transparent fs-4 border-0"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body" id="yt-player">
                        <iframe
                          width="100%"
                          height={315}
                          src={props.pageData.url.url}
                          title="YouTube video player"
                          frameBorder={0}
                          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Row */}

            <div className="row wrap-feature-29 text-white">
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div key={index} className={`col-lg-${item.sizelg.sizelg} text-center`}>
                    <i className={`icon-${item.icon.icon} display-5 `} />
                    <h5 className="title">{item.title.title}</h5>
                    <p>{item.text.text} </p>
                  </div>
                ))}
              {/* Column */}
              <div
                className="col-lg-4 text-center aos-init"
                data-aos="fade-up"
                data-aos-duration={1800}
                data-aos-easing="linear"
              >
                <img src={props.pageData.image.image} className="img-responsive" alt="Image" />
              </div>
              {/* Column */}

              {/* Column */}
            </div>
            {/* Row */}
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features29.propTypes = {
  pageData: PropTypes.object.isRequired,
}

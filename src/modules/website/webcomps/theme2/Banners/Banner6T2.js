import React from 'react'
import PropTypes from 'prop-types'

export const Banner6T2 = ({ pageData }) => {
  const [videoPlaying, setVideoPlaying] = React.useState(false)
  const errState = { error: false }
  try {
    return (
      <div id="static-slider6-html">
        <div className={`static-slider6 bg-${pageData.content.content.bgColor}-gradiant`}>
          <div className="left-right-bg" style={{}}>
            <div className="container">
              {/* Row  */}
              <div className="row justify-content-center">
                {/* Column */}
                <div
                  className="col-md-8 align-self-center aos-init"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <span className="badge badge-warning p-10">{pageData.content.content.badge}</span>
                  <h1 className="title text-white">{pageData.content.content.text}</h1>
                </div>
                {/* Column */}
                <div
                  className="col-md-8 text-center m-t-40 middle-image aos-init"
                  data-aos="fade-up"
                  data-aos-duration={1200}
                >
                  <img
                    src={pageData.content.content.image}
                    className={`video-img img-fluid rounded ${videoPlaying && 'hide'}`}
                    data-testid="setVideoPlaying"
                    onClick={() => setVideoPlaying(true)}
                    alt="trt"
                  />
                  <div
                    className={`embed-responsive embed-responsive-16by9 ${
                      videoPlaying !== true && 'hide'
                    }`}
                    data-animation="animated fadeIn"
                  >
                    <video
                      className="video rounded"
                      style={{ width: '100%' }}
                      controls
                      autoPlay={videoPlaying}
                      muted
                      playsInline
                    >
                      <source
                        src={pageData.content.content.videomp4}
                        type="video/mp4"
                        poster={pageData.content.content.videoPoster}
                        preload="auto"
                      />{' '}
                      Your browser does not support HTML5 video.
                      <source
                        src={pageData.content.content.videoogg}
                        type="video/ogg"
                        poster={pageData.content.content.videoPoster}
                        preload="auto"
                      />{' '}
                      Your browser does not support HTML5 video.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Banner6T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

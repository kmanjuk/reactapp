import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { VideoModal } from '../../../Layout/VideoModal'

export const Banner4T2 = ({ pageData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const errState = { error: false }
  try {
    return (
      <>
        <div id="static-slider4-html">
          <div className="static-slider4">
            <div className="container">
              {/* Row  */}
              <div className="row">
                <div
                  className="col-md-5 img-anim order-2 order-md-1 aos-init"
                  data-aos="fade-up"
                  data-aos-duration={2200}
                >
                  <img src={pageData.content.content.image} alt="trt" className="img-fluid" />
                </div>
                <div
                  className="col-md-6 ms-auto order-1 order-md-2 align-self-center aos-init"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <h1 className="title">
                    {pageData.content.content.text}{' '}
                    <b className="font-bold">
                      {pageData.content.content.textBold}{' '}
                      <span className="text-info-gradiant typewrite" data-period={2000}>
                        <span className="wrap">{pageData.content.content.textColored}</span>
                      </span>
                    </b>
                  </h1>
                  <Link
                    className="btn btn-outline-info btn-md btn-arrow m-t-20"
                    to={pageData.content.content.buttonLink}
                  >
                    <span>
                      {pageData.content.content.buttonText} <i className="ti-arrow-right" />
                    </span>
                  </Link>
                </div>
                {/* Column */}
              </div>
            </div>
            <div className="bg-info-gradiant">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ms-auto info-box">
                    <div className="d-flex">
                      <div className="display-4 text-white m-r-20">
                        <i className="fa fa-play-circle" />
                      </div>
                      <div className="align-self-center">
                        <h4 className="font-light m-b-0">
                          <span
                            onClick={() => setIsModalOpen(true)}
                            data-testid="setIsModalOpen"
                            className="text-white cursor_Pointer"
                          >
                            <b className="font-bold">{pageData.content.content.videoTitle}</b>
                            <br />
                            {pageData.content.content.videoText}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <VideoModal url={pageData.content.content.videoURL} setIsModalOpen={setIsModalOpen} />
        )}
      </>
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

Banner4T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

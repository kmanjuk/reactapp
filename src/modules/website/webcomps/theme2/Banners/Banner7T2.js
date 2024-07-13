import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { VideoModal } from '../../../Layout/VideoModal'

export const Banner7T2 = ({ pageData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const errState = { error: false }
  try {
    return (
      <>
        <div id="static-slider7-html">
          <div
            className="static-slider7"
            style={{
              backgroundImage: `url('${pageData.content.content.image}')`,
            }}
          >
            <div className="container">
              {/* Row  */}
              <div className="row justify-content-center ">
                {/* Column */}
                <div
                  className="col-md-8 align-self-center text-center aos-init"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <h1
                    className="title text-white typewrite"
                    data-period={2000}
                    data-type='[ "Colour", "TRT" ]'
                  >
                    <span className="wrap">{pageData.content.content.header}</span>
                  </h1>
                  <h4 className="text-white">{pageData.content.content.text}</h4>
                  <Link
                    className="btn btn-danger-gradiant text-white btn-rounded btn-md btn-arrow m-t-20 m-r-10"
                    to={pageData.content.content.buttonLink}
                  >
                    <span>
                      {pageData.content.content.buttonText} <i className="ti-arrow-right" />
                    </span>
                  </Link>
                  <span
                    onClick={() => setIsModalOpen(true)}
                    data-testid="setIsModalOpen"
                    className="btn btn-outline-light btn-rounded btn-md m-t-20"
                  >
                    <i className="fa fa-play m-r-10" /> {pageData.content.content.videoText}{' '}
                  </span>
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

Banner7T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

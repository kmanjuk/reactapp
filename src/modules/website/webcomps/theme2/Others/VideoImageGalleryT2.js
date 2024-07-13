import React from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'

export const VideoImageGalleryT2 = ({ pageData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [modalObj, setModalObj] = React.useState(null)
  const [type, setType] = React.useState(null)

  const videoModalFunc = (obj, type) => {
    setIsModalOpen(!isModalOpen)
    setModalObj(obj)
    setType(type)
  }

  const errState = { error: false }
  try {
    return (
      <>
        <div className="theme2-portfolio4 theme2-spacer theme2-up">
          <div className="theme2-container">
            <div className="theme2-row">
              <div className="theme2-col-12 theme2-text-center">
                <h2 className="theme2-title">{pageData.content.content.header}</h2>
                <h6 className="theme2-subtitle">{pageData.content.content.text}</h6>
              </div>
            </div>
            <div className="theme2-row theme2-portfolio-box4" style={{ position: 'relative' }}>
              {pageData.content.content.galleryItems &&
                pageData.content.content.galleryItems.length > 0 &&
                pageData.content.content.galleryItems.map((gal, galItm) => (
                  <div
                    className={`theme2-col-${gal.size} theme2-filter theme2-abstract theme2-print`}
                  >
                    <div className="theme2-overlay-box">
                      <img
                        src={
                          gal.type === 'image'
                            ? gal.url
                            : `https://img.youtube.com/vi/${gal.url}/hqdefault.jpg`
                        }
                        alt={`gal${galItm}`}
                        className="w-100 theme2-img-fluid"
                      />
                      <span
                        className="theme2-overlay cursor_Pointer"
                        data-testid="videoMadalFunction"
                        onClick={() => videoModalFunc(gal, gal.type)}
                      >
                        <div className="theme2-port-text">
                          <h5>
                            <i className="fa fa-search fa-3x"></i>
                          </h5>
                        </div>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            id="mymodal5"
            className="theme2-modal theme2-fade theme2-custom-modal theme2-modal6 theme2-show"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            style={{
              display: 'block',
              backgroundColor: 'rgba(55,55,55,0.3)',
            }}
          >
            <div className="theme2-modal-dialog theme2-modal-fullscreen-sm-down theme2-modal-lg">
              <div className="theme2-modal-content theme2-po-relative">
                <div className="theme2-modal-body theme2-p-0">
                  <div className="theme2-row">
                    <div className="theme2-col-12 theme2-modal-bg-img">
                      {type === 'video' && (
                        <ReactPlayer
                          config={{
                            youtube: {
                              playerVars: { loop: 1 },
                            },
                          }}
                          controls={true}
                          url={'https://www.youtube.com/watch?v=' + modalObj.url}
                          width="100%"
                          height="calc(100vh - 100px)"
                        />
                      )}
                      {type === 'image' && (
                        <img src={modalObj.url} alt="img" className="theme2-img-responsive" />
                      )}
                    </div>
                  </div>
                  <span
                    className="theme2-close-btn theme2-d-flex theme2-align-items-center theme2-justify-content-center cursor_Pointer"
                    data-bs-dismiss="modal"
                    aria-hidden="true"
                    data-testid="setIsModalOpen"
                    onClick={() => setIsModalOpen(false)}
                  >
                    ×
                  </span>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
        )}
      </>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        {console.log(err)}
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>
          try again
        </a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

VideoImageGalleryT2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

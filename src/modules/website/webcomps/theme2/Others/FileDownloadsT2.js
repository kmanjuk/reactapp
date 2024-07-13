import React from 'react'
import PropTypes from 'prop-types'
import { default as dayjs } from 'dayjs'

export const FileDownloads = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card-box">
                <div className="row justify-content-center">
                  <div className="col-12 text-center">
                    <h2 className="title">{props.pageData.header.header}</h2>
                    <h6 className="subtitle">{props.pageData.headerText.headerText}</h6>
                  </div>
                </div>
                <div className="row justify-content-center">
                  {props.pageData.childItems.map((file, fileIndex) => (
                    <div key={fileIndex} className="col-lg-3 col-sm-4 b-all m-2">
                      <div className="file-man-box">
                        <div className="file-img-box">
                          <img
                            src={`https://thulishacdnstorage.blob.core.windows.net/resources/file-${file.type.type}.svg`}
                            alt="icon"
                          />
                        </div>
                        <a
                          href={file.fileURL.fileURL}
                          target="_blank"
                          download="Downloads"
                          rel="noopener noreferrer"
                          className="file-download"
                          style={{ paddingLeft: '1.2rem' }}
                        >
                          <i className="fa fa-download" />
                        </a>
                        <div className="file-man-title" style={{ paddingLeft: '1.2rem' }}>
                          <h5 className="mb-0 text-overflow">{file.fileName.fileName}</h5>
                          <p className="mb-0">
                            <small>{dayjs(file.date.date).format('MM-DD-YYYY')}</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* container */}
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

FileDownloads.propTypes = {
  pageData: PropTypes.object.isRequired,
}

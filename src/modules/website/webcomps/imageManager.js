import React from 'react'
import PropTypes from 'prop-types'
import { default as dayjs } from 'dayjs'

import { useGetCall } from '../../../lib/api/get'
import { useCreateImageCall } from '../../../lib/api/create'
import httpParams from '../../../lib/httpParams'
import { useOnClickOutside } from '../../../modules/lib/OnClickOutside'

export const ImageManager = (props) => {
  const params = httpParams.adminOrgParams(props.appVariables)
  const getQuery = useGetCall(props.appVariables.REACT_APP_API_URL, 'image', params)
  const createCallMutation = useCreateImageCall()
  const [clipboardMessage, setSlipboardMessage] = React.useState(null)
  const [imageFile, setImageFile] = React.useState(null)
  const modalClose = React.useRef()
  useOnClickOutside(modalClose, () => props.setImageManage(false))

  const copyImageLink = (link) => {
    navigator.clipboard.writeText(link)
    setSlipboardMessage(link)
  }

  const uploadImage = async () => {
    let formData = new FormData()
    formData.append('file', imageFile)
    formData['type'] = 'Image'
    await createCallMutation.mutateAsync({
      url: props.appVariables.REACT_APP_API_URL,
      apiEndpoint: 'image',
      data: formData,
      messageTitle: 'Images',
      message: 'Image Uploaded!',
      params: params,
    })
  }

  if (getQuery.isLoading) {
    return (
      <>
        <div
          className={`spinner-border text-${props.appSettings?.loader}`}
          role="status"
          style={{ position: 'fixed', top: '50%', left: '50%' }}
        >
          <span className="sr-only">Loading...</span>
        </div>
        <span className="sr-only">Loading...</span>
      </>
    )
  }

  return (
    <div
      className="modal fade bd-example-modal-lg show"
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ display: 'block', backgroundColor: 'rgba(55,55,55,0.3)' }}
    >
      <div className="modal-dialog modal-md" ref={modalClose}>
        <div className="modal-content po-relative">
          <div className="modal-body p-0">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => props.setImageManage(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="row">
              <div className="col-12">
                <div className="modal-bg">
                  <h2 className="font-light m-b-0 mb-2">Image Manager</h2>

                  <div className="row cScrollBar" style={{ maxHeight: '100%' }}>
                    <div className="col-12">
                      <div className="mx-auto">
                        <div className="form-group ">
                          <label className="custom-file d-block">
                            <input
                              type="file"
                              className="form-control"
                              style={{
                                borderTopRightRadius: '0px',
                                borderBottomRightRadius: '0px',
                              }}
                              onChange={(e) => setImageFile(e.target.files[0])}
                            />
                            <span className="custom-file-control"></span>
                          </label>
                        </div>
                        <div className="">
                          <button
                            className="btn btn-primary"
                            style={{
                              borderTopLeftRadius: '0px',
                              borderBottomLeftRadius: '0px',
                            }}
                            onClick={() => uploadImage()}
                          >
                            {createCallMutation.isLoading ? (
                              <>
                                <span
                                  className="spinner-border spinner-border-sm"
                                  role="status"
                                  aria-hidden="true"
                                ></span>{' '}
                                Uploading...
                              </>
                            ) : (
                              <>Upload</>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="row shop-listing cScrollBar" style={{ maxHeight: '70vh' }}>
                    {getQuery.data?.formData.map((image, imageIndex) => (
                      <div className="col-md-4" key={imageIndex}>
                        <div className="card shop-hover">
                          <img
                            src={image.fileUrl}
                            alt="imageLibrary"
                            className="img-fluid"
                            style={{ maxWidth: '100%' }}
                          />
                          <div className="card-img-overlay align-items-center">
                            <button
                              className="btn btn-sm btn-outline-info"
                              onClick={() => copyImageLink(image.fileUrl)}
                            >
                              Copy
                            </button>
                          </div>
                          {clipboardMessage !== null && clipboardMessage === image.fileUrl && (
                            <span className="label label-rounded label-success">Copied</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ImageManager.propTypes = {
  pageData: PropTypes.object.isRequired,
}

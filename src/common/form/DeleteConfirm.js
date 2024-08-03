import React from 'react'
import PropTypes from 'prop-types'

export const DeleteConfirm = ({ setDeleteId, setDeleteConfirm, deleteCallMutation, onDelete }) => {
  return (
    <div
      id="removeItemModal"
      className="trtui-modal trtui-fade trtui-zoomIn trtui-show"
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
      style={{
        display: 'block',
        backgroundColor: 'rgba(55,55,55,0.3)',
        position: 'fixed',
      }}
    >
      <div className="trtui-modal-dialog trtui-modal-dialog-centered">
        <div className="trtui-modal-content">
          <div className="trtui-modal-header">
            <button
              type="button"
              className="trtui-btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              id="btn-close"
            />
          </div>
          <div className="trtui-modal-body">
            <div className="trtui-mt-2 trtui-text-center">
              <i className="bx bxs-trash bx-lg trtui-text-danger bx-tada"></i>
              <div className="trtui-mt-4 trtui-pt-2 trtui-fs-15 trtui-mx-4 trtui-mx-sm-5">
                <h4>Are you sure ?</h4>
                <p className="text-muted mx-4 mb-0">Are you sure you want to delete this?</p>
              </div>
            </div>
            <div className="trtui-d-flex trtui-gap-2 trtui-justify-content-center trtui-mt-4 trtui-mb-2">
              <button
                type="button"
                className="trtui-btn trtui-w-sm trtui-btn-light"
                data-bs-dismiss="modal"
                onClick={() => {
                  setDeleteConfirm(false)
                  setDeleteId(null)
                }}
                disabled={deleteCallMutation.isLoading}
              >
                Cancel
              </button>
              <button
                type="button"
                className="trtui-btn trtui-w-sm trtui-btn-danger "
                onClick={onDelete}
                disabled={deleteCallMutation.isLoading}
              >
                {deleteCallMutation.isLoading ? (
                  <span className="trtui-d-flex trtui-align-items-center">
                    <span className="trtui-flex-grow-1 trtui-me-2">Deleting...</span>
                    <span className="trtui-spinner-border trtui-flex-shrink-0" role="status">
                      <span className="trtui-visually-hidden">Deleting...</span>
                    </span>
                  </span>
                ) : (
                  'Yes, Delete It!'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

DeleteConfirm.propTypes = {
  setDeleteId: PropTypes.func.isRequired,
  setDeleteConfirm: PropTypes.func.isRequired,
  deleteCallMutation: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

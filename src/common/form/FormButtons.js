import React from 'react'
import PropTypes from 'prop-types'

export const FormButtons = ({
  isViewOnly,
  isAdd,
  isRowForm,
  createCallMutation,
  updateCallMutation,
  deleteCallMutation,
  confirmDelete,
  isUpdate,
  defaultData,
  setOpenFormModal,
  formSchema,
}) => {
  return isViewOnly ? null : (
    <div className="trtui-col-12">
      {isAdd ? (
        <>
          <button
            className={`trtui-btn trtui-btn-primary ${isRowForm ? 'trtui-btn-icon trtui-btn-sm' : ''}`}
            type="submit"
            disabled={createCallMutation.isLoading}
          >
            {createCallMutation.isLoading ? (
              <span className="trtui-d-flex trtui-align-items-center">
                <span className="trtui-flex-grow-1 trtui-me-2">
                  {isRowForm ? '...' : 'Adding...'}
                </span>
                <span className="trtui-spinner-border trtui-flex-shrink-0" role="status">
                  <span className="trtui-visually-hidden">{isRowForm ? '...' : 'Adding...'}</span>
                </span>
              </span>
            ) : isRowForm ? (
              <i className="ri-delete-bin-5-line" />
            ) : (
              'Add'
            )}
          </button>{' '}
          <button
            className={`trtui-btn trtui-btn-light  ${isRowForm ? 'trtui-btn-icon trtui-btn-sm' : ''}`}
            onClick={() => setOpenFormModal(false)}
            type="button"
            disabled={createCallMutation.isLoading}
          >
            {isRowForm ? <i className="ri-close-line" /> : 'Close'}
          </button>
        </>
      ) : (
        <>
          <button
            className="trtui-btn trtui-btn-success"
            type="submit"
            disabled={updateCallMutation.isLoading}
          >
            {updateCallMutation.isLoading ? (
              <span className="trtui-d-flex trtui-align-items-center">
                <span className="trtui-flex-grow-1 trtui-me-2">
                  {isRowForm ? '...' : 'Updating...'}
                </span>
                <span className="trtui-spinner-border trtui-flex-shrink-0" role="status">
                  <span className="trtui-visually-hidden">{isRowForm ? '...' : 'Updating...'}</span>
                </span>
              </span>
            ) : isRowForm ? (
              <i className="ri-check-line" />
            ) : (
              'Update'
            )}
          </button>{' '}
          {isUpdate ? (
            <button
              className="trtui-btn trtui-btn-danger"
              onClick={() => confirmDelete(defaultData[formSchema.id])}
              type="button"
              disabled={deleteCallMutation.isLoading}
            >
              {deleteCallMutation.isLoading ? (
                <span className="trtui-d-flex trtui-align-items-center">
                  <span className="trtui-flex-grow-1 trtui-me-2">
                    {isRowForm ? '...' : 'Deleting...'}
                  </span>
                  <span className="trtui-spinner-border trtui-flex-shrink-0" role="status">
                    <span className="trtui-visually-hidden">
                      {isRowForm ? '...' : 'Deleting...'}
                    </span>
                  </span>
                </span>
              ) : isRowForm ? (
                <i className="ri-delete-bin-line" />
              ) : (
                'Delete'
              )}
            </button>
          ) : (
            <button
              className="trtui-btn trtui-btn-light"
              onClick={() => setOpenFormModal(false)}
              type="button"
              disabled={updateCallMutation.isLoading}
            >
              Close
            </button>
          )}
        </>
      )}
    </div>
  )
}

FormButtons.propTypes = {
  isViewOnly: PropTypes.bool,
  defaultData: PropTypes.object.isRequired,
  confirmDelete: PropTypes.func,
  isAdd: PropTypes.bool,
  isRowForm: PropTypes.bool,
  setOpenFormModal: PropTypes.func,
  isUpdate: PropTypes.bool.isRequired,
  createCallMutation: PropTypes.object.isRequired,
  updateCallMutation: PropTypes.object.isRequired,
  deleteCallMutation: PropTypes.object.isRequired,
  formSchema: PropTypes.object.isRequired,
}

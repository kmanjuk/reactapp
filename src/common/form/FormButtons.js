import React from 'react'
import PropTypes from 'prop-types'

/**
 * FormButtons component renders the action buttons for the form.
 *
 * @module form/FormButtons
 * @description FormButtons component renders the action buttons for the form.
 * @example
 * const isViewOnly = false;
 * const isAdd = true;
 * const isRowForm = false;
 * const createCallMutation = { isLoading: false };
 * const updateCallMutation = { isLoading: false };
 * const deleteCallMutation = { isLoading: false };
 * const confirmDelete = (id) => console.log(`Delete item with id: ${id}`);
 * const isUpdate = false;
 * const defaultData = {};
 * const setOpenFormModal = () => {};
 * const formSchema = { id: 'itemId' };
 * return (
 *   <FormButtons
 *     isViewOnly={isViewOnly}
 *     isAdd={isAdd}
 *     isRowForm={isRowForm}
 *     createCallMutation={createCallMutation}
 *     updateCallMutation={updateCallMutation}
 *     deleteCallMutation={deleteCallMutation}
 *     confirmDelete={confirmDelete}
 *     isUpdate={isUpdate}
 *     defaultData={defaultData}
 *     setOpenFormModal={setOpenFormModal}
 *     formSchema={formSchema}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isViewOnly - Indicates if the form is view only.
 * @param {boolean} props.isAdd - Indicates if the form is for adding a new item.
 * @param {boolean} props.isRowForm - Indicates if the form is a row form.
 * @param {Object} props.createCallMutation - Mutation object for creating a new item.
 * @param {boolean} props.createCallMutation.isLoading - Indicates if the create mutation is loading.
 * @param {Object} props.updateCallMutation - Mutation object for updating an item.
 * @param {boolean} props.updateCallMutation.isLoading - Indicates if the update mutation is loading.
 * @param {Object} props.deleteCallMutation - Mutation object for deleting an item.
 * @param {boolean} props.deleteCallMutation.isLoading - Indicates if the delete mutation is loading.
 * @param {function} props.confirmDelete - Function to confirm deletion of an item.
 * @param {boolean} props.isUpdate - Indicates if the form is for updating an item.
 * @param {Object} props.defaultData - The default data for the form.
 * @param {function} props.setOpenFormModal - Function to open the form modal.
 * @param {Object} props.formSchema - The schema defining the form structure.
 * @param {string} props.formSchema.id - The unique identifier field name in the form schema.
 *
 * @returns {React.Element} The FormButtons component.
 */
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

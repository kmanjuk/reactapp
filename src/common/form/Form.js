import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Y from 'yup'
import PropTypes from 'prop-types'
import axios from 'axios'

import { createYupSchema } from '../../lib/createYUPSchema'
import { InputField } from './formElements/InputField'
import { FormButtons } from './FormButtons'
import { DeleteConfirm } from './DeleteConfirm'
import { useUpdateCall } from '../../lib/api/update'

/**
 * Form component renders a dynamic form based on the provided schema.
 *
 * @module form/Form
 * @description Form component renders a dynamic form based on the provided schema.
 * @example
 * const isViewOnly = false;
 * const defaultData = {};
 * const formSchema = { schema: [], buildValidation: [] };
 * const moduleSchema = {};
 * const isAdd = true;
 * const isRowForm = false;
 * const setOpenFormModal = () => {};
 * const isUpdate = false;
 * const envData = {};
 * const addUserObject = false;
 * const authDetails = {};
 * return (
 *   <Form
 *     isViewOnly={isViewOnly}
 *     defaultData={defaultData}
 *     formSchema={formSchema}
 *     moduleSchema={moduleSchema}
 *     isAdd={isAdd}
 *     isRowForm={isRowForm}
 *     setOpenFormModal={setOpenFormModal}
 *     isUpdate={isUpdate}
 *     envData={envData}
 *     addUserObject={addUserObject}
 *     authDetails={authDetails}
 *   />
 * )
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isViewOnly - Indicates if the form is view only.
 * @param {Object} props.defaultData - The default data for the form.
 * @param {Object} props.formSchema - The schema defining the form structure.
 * @param {Array} props.formSchema.schema - Array of form field schemas.
 * @param {Array} props.formSchema.buildValidation - Array of validation rules.
 * @param {Object} props.moduleSchema - The schema for the module.
 * @param {boolean} props.isAdd - Indicates if the form is for adding a new item.
 * @param {boolean} props.isRowForm - Indicates if the form is a row form.
 * @param {function} props.setOpenFormModal - Function to open the form modal.
 * @param {boolean} props.isUpdate - Indicates if the form is for updating an item.
 * @param {boolean} props.addUserObject - Indicates if a user object should be added.
 * @param {Object} props.authDetails - Authentication details.
 * @param {string} props.isLocalEnvironment - Environment string.
 *
 * @returns {React.Element} The Form component.
 */
export const Form = ({
  isViewOnly,
  defaultData,
  formSchema,
  moduleSchema,
  isAdd,
  isRowForm,
  setOpenFormModal,
  isUpdate,
  isProfile,
  addUserObject,
  authDetails,
  isLocalEnvironment,
}) => {
  const validation = Y.object().shape({
    ...formSchema.buildValidation.reduce(createYupSchema, {}),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: isAdd ? 'onSubmit' : 'onChange',
    resolver: yupResolver(validation),
  })

  const updateCallMutation = useUpdateCall()

  const [deleteId, setDeleteId] = React.useState(null)
  const [deleteConfirm, setDeleteConfirm] = React.useState(false)

  const onCreate = () => {
    console.log('creating......')
  }

  const onUpdate = async (data) => {
    for (let prop in defaultData) {
      if (defaultData[prop]) {
        if (!(prop in data)) {
          data[prop] = defaultData[prop]
        }
      }
    }

    const payload = { ...data }
    if (formSchema.makebool) {
      formSchema.makeboolKey.map((k) => (payload[k.k] = k.v))
    }

    if (formSchema.handleDatefields) {
      formSchema.dateFields.map((k) => {
        if (payload[k] === 'Invalid Date') {
          payload[k] = null
        }
      })
    }

    if (addUserObject === true) {
      const plData = authDetails?.session?.user

      plData['password_hash'] = payload['password_hash']
      delete plData['UserFamily']
      delete plData['rowFormData']
      delete plData['userLogins']
      delete plData['userRoles']
      delete plData['userApplications']
      if (formSchema.captureFingerPrint) {
        plData[formSchema.fingerPrintField] = localStorage.getItem('mfsFP')
      }

      const isUpdateEndpoint =
        moduleSchema && moduleSchema.updateLocal && moduleSchema.updateLocal === true
          ? { url: isLocalEnvironment, endPoint: moduleSchema.updateLocalEndpoint }
          : {
              url: isLocalEnvironment,
              endPoint: formSchema.formAPI,
            }

      await updateCallMutation.mutateAsync({
        url: isUpdateEndpoint.url,
        apiEndpoint: isProfile ? 'userProfile' : isUpdateEndpoint.endPoint,
        data: plData, // data,
        id: plData.userId,
        messageTitle: formSchema.message.title,
        message: formSchema.message.message,
        params: `${
          moduleSchema && moduleSchema.updateLocal && moduleSchema.updateLocal
            ? '&endPoint=appuser&id=' + plData.userId
            : ''
        }`,
      })
      if (formSchema.refreshAppData) {
        axios.get(isLocalEnvironment + '/updateAppData')
      }
    } else {
      if (formSchema.captureFingerPrint) {
        payload[formSchema.fingerPrintField] = localStorage.getItem('mfsFP')
        localStorage.removeItem('mfsFP')
      }

      const isUpdateEndpoint =
        moduleSchema && moduleSchema.updateLocal && moduleSchema.updateLocal
          ? { url: isLocalEnvironment, endPoint: moduleSchema.updateLocalEndpoint }
          : {
              url: isLocalEnvironment,
              endPoint: formSchema.formAPI,
            }

      await updateCallMutation.mutateAsync({
        url: isUpdateEndpoint.url,
        apiEndpoint: isProfile ? 'userProfile' : isUpdateEndpoint.endPoint,
        data: payload, // data,
        id: payload[formSchema.id],
        messageTitle: formSchema.message.title,
        message: formSchema.message.message,
        params: `${
          moduleSchema && moduleSchema.updateLocal && moduleSchema.updateLocal
            ? '&endPoint=appuser&id=' + payload[formSchema.id]
            : ''
        }`,
      })
      if (formSchema.refreshAppData) {
        axios.get(isLocalEnvironment + '/updateAppData')
      }
    }
  }

  const onDelete = () => {
    console.log(deleteId)
  }

  return (
    <form
      key={`${isAdd}${formSchema}`}
      onSubmit={handleSubmit(isAdd ? onCreate : onUpdate)}
      data-testid="formAdd"
      style={{ pointerEvents: isViewOnly ? 'none' : '' }}
    >
      <div className="trtui-row trtui-g-2">
        {formSchema.schema.length > 0 &&
          formSchema.schema.map((field, fieldIndex) =>
            field.element === 'InputField' ? (
              <InputField
                key={`${fieldIndex}${field}${isAdd}`}
                field={field}
                errors={errors}
                register={register}
                isAdd={false}
                defaultData={defaultData}
              />
            ) : null,
          )}
        <FormButtons
          isViewOnly={isViewOnly}
          isAdd={isAdd}
          isRowForm={isRowForm}
          isUpdate={isUpdate}
          createCallMutation={{}}
          updateCallMutation={updateCallMutation}
          deleteCallMutation={{}}
          defaultData={defaultData}
          setOpenFormModal={setOpenFormModal}
          formSchema={formSchema}
        />
        {deleteConfirm && (
          <DeleteConfirm
            onDelete={onDelete}
            setDeleteId={setDeleteId}
            setDeleteConfirm={setDeleteConfirm}
            deleteCallMutation={{}}
          />
        )}
      </div>
    </form>
  )
}

Form.propTypes = {
  isViewOnly: PropTypes.bool,
  defaultData: PropTypes.object.isRequired,
  formSchema: PropTypes.object.isRequired,
  moduleSchema: PropTypes.object.isRequired,
  isAdd: PropTypes.bool,
  isRowForm: PropTypes.bool,
  setOpenFormModal: PropTypes.func,
  isUpdate: PropTypes.bool.isRequired,
  isProfile: PropTypes.bool.isRequired,
  addUserObject: PropTypes.bool,
  authDetails: PropTypes.object,
  isLocalEnvironment: PropTypes.string,
}

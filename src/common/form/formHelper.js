import axios from 'axios'
import { useUpdateCall } from '../../lib/api/update'

const updateCallMutation = useUpdateCall()

export const onCreate = () => {
  console.log('creating......')
}

export const onUpdate = async ({
  data,
  defaultData,
  envData,
  formSchema,
  moduleSchema,
  addUserObject,
  authDetails,
}) => {
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
        ? { url: envData.REACT_APP_API_URL_LOCAL, endPoint: moduleSchema.updateLocalEndpoint }
        : {
            url: envData.REACT_APP_API_URL_LOCAL,
            endPoint: formSchema.formAPI,
          }

    await updateCallMutation.mutateAsync({
      url: isUpdateEndpoint.url,
      apiEndpoint: isUpdateEndpoint.endPoint,
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
      axios.get(envData.REACT_APP_API_URL_LOCAL + '/updateAppData')
    }
  } else {
    if (formSchema.captureFingerPrint) {
      payload[formSchema.fingerPrintField] = localStorage.getItem('mfsFP')
      localStorage.removeItem('mfsFP')
    }

    const isUpdateEndpoint =
      moduleSchema && moduleSchema.updateLocal && moduleSchema.updateLocal
        ? { url: envData.REACT_APP_API_URL_LOCAL, endPoint: moduleSchema.updateLocalEndpoint }
        : {
            url: envData.REACT_APP_API_URL_LOCAL,
            endPoint: formSchema.formAPI,
          }

    await updateCallMutation.mutateAsync({
      url: isUpdateEndpoint.url,
      apiEndpoint: isUpdateEndpoint.endPoint,
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
      axios.get(envData.REACT_APP_API_URL_LOCAL + '/updateAppData')
    }
  }
}

export const onDelete = () => {
  console.log('updating......')
}

export const confirmDelete = (id, setDeleteId, setDeleteConfirm) => {
  setDeleteId(id)
  setDeleteConfirm(true)
}

export const closeDelete = (setDeleteConfirm, setDeleteId) => {
  setDeleteConfirm(false)
  setDeleteId(null)
}

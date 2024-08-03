import { useMutation } from 'react-query'
import { axios } from '../axios'
import { queryClient } from '../../lib/reactQueryClient'
import { useNotificationStore } from '../../store/notifications'

let callData
export const updateCall = (call) => {
  callData = call
  return axios.put(call.url + `/${call.apiEndpoint}/${call.id}` + call.params, call.data)
}

export const useUpdateCall = (call, { config } = {}) => {
  const { addNotification } = useNotificationStore()
  return useMutation(async (call) => await updateCall(call), {
    onError: (err, _, __, context) => {
      if (context?.previousCall) {
        queryClient.setQueryData(call.apiEndpoint, context.previousCall)
      }
      addNotification({
        type: 'error',
        title: callData.messageTitle,
        message: err.message,
      })
    },
    onSuccess: () => {
      if (callData.invalidateWithParams !== true) {
        queryClient.invalidateQueries(
          callData.parentAPI ? callData.parentAPI : callData.apiEndpoint,
        )
      }
      if (!callData.noConfirmation) {
        addNotification({
          type: 'success',
          title: callData.messageTitle,
          message: callData.message,
        })
      }
    },
    ...config,
    mutationFn: () => updateCall,
  })
}

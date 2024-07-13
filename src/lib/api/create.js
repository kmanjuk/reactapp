import { useMutation } from 'react-query'
import { axios } from '../axios'
import { queryClient } from '../../lib/reactQueryClient'
//import { useNotificationStore } from '../../store/notifications';
let callData
export const createCall = (call, params) => {
  callData = call
  return axios.post(call.url + `/${call.apiEndpoint}` + params, call.data)
}
export const useCreateCall = (call, { config } = {}) => {
  //const { addNotification } = useNotificationStore();
  return useMutation(async (call) => await createCall(call, call.params), {
    onError: (_, __, context) => {
      if (context?.previousCall) {
        queryClient.setQueryData(call.apiEndpoint, context.previousCall)
      }
      // addNotification({
      // 	type: 'error',
      // 	title: callData.messageTitle,
      // 	message: 'Error! Something went wrong',
      // });
    },
    onSuccess: (resp) => {
      if (!callData.noQueryInvalidation) {
        queryClient.invalidateQueries(
          callData.parentAPI ? callData.parentAPI : callData.apiEndpoint,
        )
      }
      // if (!callData.noConfirmation) {
      // 	addNotification({
      // 		type: 'success',
      // 		title: callData.messageTitle,
      // 		message: callData.message,
      // 	});
      // }
    },
    ...config,
    mutationFn: () => createCall,
  })
}

export const useCreateImageCall = (call, { config } = {}) => {
  //const { addNotification } = useNotificationStore();
  return useMutation(async (call) => await createCall(call, call.params), {
    onError: (_, __, context) => {
      if (context?.previousCall) {
        queryClient.setQueryData(call.apiEndpoint, context.previousCall)
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries('image')
      // addNotification({
      // 	type: 'success',
      // 	title: callData.messageTitle,
      // 	message: callData.message,
      // });
    },
    ...config,
    mutationFn: () => createCall,
  })
}

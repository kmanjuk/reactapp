import { useMutation } from 'react-query'
import { axios } from '../axios'
import { queryClient } from '../../lib/reactQueryClient'

/**
 * @class api/create
 * @description Crete hook allows to make post api call across the app
 * @author Thulisha Reddy Technologies
 */

/**
 * Post api call
 * @function createCall
 * @description makes post api call
 * @param {object} call object with details of api call
 * @param {string} params query parameters for making post api call
 * @returns response object.
 */
let callData
export const createCall = (call, params) => {
  callData = call
  return axios.post(call.url + `/${call.apiEndpoint}` + params, call.data)
}

/**
 * Post call hook
 * @function useCreateCall
 * @description mutated hook used to post data to api
 * @param {object} call object with details to make api call
 * @returns response object.
 */
export const useCreateCall = (call, { config } = {}) => {
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
    onSuccess: () => {
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

/**
 * Post image hook
 * @function useCreateImageCall
 * @description mutated hook used to post image data to api
 * @param {object} call object with details to make api call and upload image
 * @returns response object.
 */
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

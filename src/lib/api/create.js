import { useMutation } from 'react-query'
import { axios } from '../axios'
import { queryClient } from '../../lib/reactQueryClient'

let callData

/**
 * Creates a call to the specified API endpoint.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and data.
 * @param {string} call.url - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {Object} call.data - The data to be sent with the request.
 * @param {string} params - Additional parameters to append to the API endpoint.
 * @returns {Promise} The Axios promise for the POST request.
 */
export const createCall = (call, params) => {
  callData = call
  return axios.post(call.url + `/${call.apiEndpoint}` + params, call.data)
}

/**
 * Custom hook to create a call mutation using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and data.
 * @param {Object} [config] - Optional configuration for the mutation.
 * @returns {Object} The mutation object from react-query.
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
 * Custom hook to create an image call mutation using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and data.
 * @param {Object} [config] - Optional configuration for the mutation.
 * @returns {Object} The mutation object from react-query.
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

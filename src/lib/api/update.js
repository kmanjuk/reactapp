import { useMutation } from 'react-query'
import { axios } from '../axios'
import { queryClient } from '../../lib/reactQueryClient'
import { useNotificationStore } from '../../store/notifications'

/**
 * @module updateCall
 */

/**
 * Makes a PUT request to update the specified resource.
 *
 * @function
 * @param {Object} call - The call object containing the URL, endpoint, id, parameters, and data.
 * @param {string} call.url - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {string} call.id - The ID of the resource to update.
 * @param {string} call.params - The query parameters to append to the URL.
 * @param {Object} call.data - The data to send in the PUT request.
 * @returns {Promise} The Axios promise for the PUT request.
 */

let callData

export const updateCall = (call) => {
  callData = call
  console.log(call)
  return axios.put(call.url + `/${call.apiEndpoint}/${call.id}` + call.params, call.data)
}

/**
 * Custom hook to perform an update mutation using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and configuration.
 * @param {Object} [config] - Optional configuration for the mutation.
 * @param {string} call.url - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {string} call.id - The ID of the resource to update.
 * @param {string} call.params - The query parameters to append to the URL.
 * @param {Object} call.data - The data to send in the PUT request.
 * @returns {Object} The mutation object from react-query.
 */
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

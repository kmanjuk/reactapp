import { useQuery, useMutation } from 'react-query'
import { axios } from '../axios-get'

/**
 * @module getCall
 */

/**
 * Makes a GET request to the specified API endpoint.
 *
 * @function
 * @param {string} call - The full URL for the API endpoint.
 * @returns {Promise} The Axios promise for the GET request.
 */
function getCall(call) {
  return axios.get(call)
}

/**
 * Custom hook to perform a GET query using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and configuration.
 * @param {Object} [config] - Optional configuration for the query.
 * @param {string} call.apiURL - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {boolean} [call.doPolling] - Whether to enable polling.
 * @param {boolean} [call.enabled] - Whether the query should be enabled.
 * @returns {Object} The query object from react-query.
 */
export const useGetQuery = (call, { config } = {}) => {
  return useQuery({
    ...config,
    refetchInterval: call.doPolling ? 30000 : false,
    queryKey: [call.apiEndpoint],
    queryFn: () => getCall(call.apiURL + '/' + call.apiEndpoint),
    enabled: call.enabled,
  })
}

/**
 * Custom hook to perform a GET mutation using react-query.
 *
 * @function
 * @returns {Object} The mutation object from react-query.
 */
export const useGetMutate = () => {
  return useMutation(async (call) => await getCall(call), {
    onError: () => {},
    onSuccess: () => {},
    mutationFn: () => getCall,
  })
}

/**
 * Custom hook to perform a paginated GET query using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and configuration.
 * @param {Object} [config] - Optional configuration for the query.
 * @param {string} call.apiURL - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {string} call.pageName - The name of the page.
 * @param {string} call.id - The ID of the page.
 * @param {boolean} [call.enabled] - Whether the query should be enabled.
 * @returns {Object} The query object from react-query.
 */
export const useGetPageCall = (call, { config } = {}) => {
  let pageName = call.pageName.split(' ').join('')
  return useQuery({
    ...config,
    queryKey: [call.apiEndpoint],
    enabled: call.enabled,
    queryFn: () =>
      getCall(
        call.apiURL + '/' + call.apiEndpoint + '?pageId=' + call.id + '&pageName=' + pageName,
      ),
  })
}

/**
 * Custom hook to perform a SPA page GET query using react-query.
 *
 * @function
 * @param {Object} call - The call object containing the API endpoint and configuration.
 * @param {Object} [config] - Optional configuration for the query.
 * @param {string} call.apiURL - The base URL for the API.
 * @param {string} call.apiEndpoint - The specific API endpoint.
 * @param {string} call.homePage - The name of the home page.
 * @param {boolean} [call.enabled] - Whether the query should be enabled.
 * @returns {Object} The query object from react-query.
 */
export const useGetSPAPageCall = (call, { config } = {}) => {
  let pageName = call.homePage.split(' ').join('')
  return useQuery({
    ...config,
    queryKey: [call.apiEndpoint],
    enabled: call.enabled,
    queryFn: () => getCall(call.apiURL + '/' + call.apiEndpoint + '?pageName=' + pageName),
  })
}

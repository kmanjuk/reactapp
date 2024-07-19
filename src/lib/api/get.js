import { useQuery, useMutation } from 'react-query'
import { axios } from '../axios'

/**
 * @class api/get
 * @description Crete hook allows to make post api call across the app
 * @author Thulisha Reddy Technologies
 */

/**
 * Get api call
 * @function getCall
 * @description makes get api call
 * @param {object} call object with details of api call
 * @returns response object.
 */
function getCall(call) {
  return axios.get(call)
}

/**
 * Get call hook
 * @function useGetQuery
 * @description hook used to get data from api
 * @param {object} call object with details to make api call
 * @returns response object.
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
 * Get call hook
 * @function useGetMutate
 * @description mutated hook used to get data from api
 * @param {object} call object with details to make api call
 * @returns response object.
 */
export const useGetMutate = () => {
  return useMutation(async (call) => await getCall(call), {
    onError: () => {},
    onSuccess: () => {},
    mutationFn: () => getCall,
  })
}

/**
 * Get call hook for public pageData
 * @function useGetPageCall
 * @description hook used to get data from api
 * @param {object} call object with details to make api call
 * @returns response object.
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
 * Get call hook for public SPA pageData
 * @function useGetPageCall
 * @description hook used to get data from api for pages marked as SPA
 * @param {object} call object with details to make api call
 * @returns response object.
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

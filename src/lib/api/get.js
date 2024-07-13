import { useQuery, useMutation } from 'react-query'
import { axios } from '../axios'

function getCall(call) {
  return axios.get(call)
}

export const useGetQuery = (call, { config } = {}) => {
  return useQuery({
    ...config,
    refetchInterval: call.doPolling ? 30000 : false,
    queryKey: [call.apiEndpoint],
    queryFn: () => getCall(call.apiURL + '/' + call.apiEndpoint),
    enabled: call.enabled,
  })
}

export const useGetMutate = () => {
  return useMutation(async (call) => await getCall(call), {
    onError: (_, __, context) => {},
    onSuccess: () => {},
    ...config,
    mutationFn: () => getCall,
  })
}

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

export const useGetSPAPageCall = (call, { config } = {}) => {
  let pageName = call.homePage.split(' ').join('')
  return useQuery({
    ...config,
    queryKey: [call.apiEndpoint],
    enabled: call.enabled,
    queryFn: () => getCall(call.apiURL + '/' + call.apiEndpoint + '?pageName=' + pageName),
  })
}

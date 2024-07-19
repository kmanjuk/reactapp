import { QueryClient } from 'react-query'

/**
 * @class QueryClient
 * @description hook to interact with cache
 * @author Thulisha Reddy Technologies
 */

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    sideNavbar: false,
  },
}

/**
 * queryClient is used to interact with cache
 * @function queryClient
 */
export const queryClient = new QueryClient({ defaultOptions: queryConfig })

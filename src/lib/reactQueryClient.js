import { QueryClient } from 'react-query'
const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    sideNavbar: false,
  },
}
export const queryClient = new QueryClient({ defaultOptions: queryConfig })

import { QueryClient } from 'react-query'

/**
 * The configuration object for React Query client.
 *
 * @typedef {Object} QueryConfig
 * @property {Object} queries - Configuration options for query behaviors.
 * @property {boolean} queries.useErrorBoundary - Whether to use an error boundary for queries.
 * @property {boolean} queries.refetchOnWindowFocus - Whether to refetch queries when the window regains focus.
 * @property {boolean} queries.retry - Whether to retry failed queries.
 * @property {boolean} queries.sideNavbar - Custom option for side navigation bar configuration.
 */

/**
 * Creates a new QueryClient instance with custom default options for React Query.
 *
 * @type {QueryClient}
 *
 * @example
 * // Usage in a React application:
 * // import { queryClient } from './path-to-queryClient'
 * // import { QueryClientProvider } from 'react-query'
 * //
 * // function App() {
 * //   return (
 * //     <QueryClientProvider client={queryClient}>
 * //       { Your application components }
 * //     </QueryClientProvider>
 * //   )
 * // }
 */
const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry: false,
    sideNavbar: false,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

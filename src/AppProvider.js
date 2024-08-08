import * as React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/reactQueryClient'
import PropTypes from 'prop-types'

/**
 * Provides application context with React Query client and suspense fallback.
 * @module AppProvider
 * @description Provides application context with React Query client and suspense fallback.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children nodes to render within the provider.
 * @returns {JSX.Element} The rendered component.
 */
export const AppProvider = ({ children }) => {
  return (
    <React.Suspense fallback={<div id="global-loader">LOADING.........</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  )
}

AppProvider.propTypes = {
  /**
   * The children nodes to render within the provider.
   */
  children: PropTypes.node.isRequired,
}

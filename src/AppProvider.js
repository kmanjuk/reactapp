import * as React from 'react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/reactQueryClient'
import PropTypes from 'prop-types'

export const AppProvider = ({ children }) => {
  return (
    <React.Suspense fallback={<div id="global-loader">LOADING.........</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </React.Suspense>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

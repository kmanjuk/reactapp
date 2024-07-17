import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProvider } from './AppProvider'

// Mock the queryClient
const queryClient = new QueryClient()

jest.mock('./lib/reactQueryClient', () => ({
  queryClient: queryClient,
}))

describe('AppProvider component', () => {
  test('renders children correctly', () => {
    render(
      <AppProvider>
        <div>Test Child Component</div>
      </AppProvider>
    )

    expect(screen.getByText('Test Child Component')).toBeInTheDocument()
  })

  test('displays fallback loader during suspense', () => {
    render(
      <React.Suspense fallback={<div>Loading...</div>}>
        <AppProvider>
          <div>Test Child Component</div>
        </AppProvider>
      </React.Suspense>
    )

    expect(screen.getByText('LOADING.........')).toBeInTheDocument()
  })
})

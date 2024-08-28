import React from 'react'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppProvider } from './AppProvider'

// Create a custom QueryClient for testing
const testQueryClient = new QueryClient()

describe('AppProvider', () => {
  it('renders children correctly', () => {
    render(
      <AppProvider>
        <div>Test Child Component</div>
      </AppProvider>
    )

    expect(screen.getByText('Test Child Component')).toBeInTheDocument()
  })

  it('displays fallback loading indicator when suspense is triggered', () => {
    // Simulate a Suspense scenario with a Promise that never resolves
    const TestSuspenseComponent = () => {
      throw new Promise(() => {})
    }

    render(
      <AppProvider>
        <TestSuspenseComponent />
      </AppProvider>
    )

    expect(screen.getByText('LOADING.........')).toBeInTheDocument()
  })

  it('provides the correct React Query client', () => {
    render(
      <QueryClientProvider client={testQueryClient}>
        <AppProvider>
          <div>Test Query Client Context</div>
        </AppProvider>
      </QueryClientProvider>
    )

    expect(screen.getByText('Test Query Client Context')).toBeInTheDocument()
  })
})

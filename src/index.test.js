import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axios from 'axios'
import { ErrorBoundary } from 'react-error-boundary'
import { AppProvider } from './AppProvider'
import { ErrorHandler } from './common/ErrorHandler'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Mock the axios get function
jest.mock('axios')

// Mock the AppProvider and ErrorHandler
jest.mock('./AppProvider', () => ({ children }) => <div>{children}</div>)
jest.mock('./common/ErrorHandler', () => ({ error }) => <div>Error: {error.message}</div>)

// Mock the reportWebVitals
jest.mock('./reportWebVitals')

// Mock the ReactDOM.createRoot and ReactDOM.render
jest.mock('react-dom/client', () => ({
  createRoot: () => ({
    render: jest.fn(),
  }),
}))

describe('Index.js', () => {
  let envData = {
    REACT_APP_MANIFEST: JSON.stringify({ start_url: '' }),
    REACT_APP_THEME_FAVICON: '/favicon.ico',
    REACT_APP_PAGE_TITLE: 'Test Title',
    REACT_APP_THEME_COLOR: '#FFFFFF',
  }

  beforeAll(() => {
    // Set up the environment variable
    process.env.REACT_APP_USE_API_URL_LOCAL = '1'
    process.env.REACT_APP_API_URL_LOCAL = 'http://localhost'
    axios.get.mockResolvedValue({ data: envData })
  })

  test('renders App with environmental data', async () => {
    require('./index') // Import the index.js file to execute it
    await new Promise(process.nextTick) // Wait for promises to resolve

    // Verify that axios.get was called
    expect(axios.get).toHaveBeenCalledWith('http://localhost/envData')

    // Verify that the app root was rendered with the correct components
    const root = require('react-dom/client').createRoot()
    expect(root.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
          <AppProvider>
            <App envData={envData} isLocalEnvironment="" />
          </AppProvider>
        </ErrorBoundary>
      </React.StrictMode>
    )

    // Verify other DOM manipulations
    expect(document.getElementById('appManifest').getAttribute('href')).toBeTruthy()
    expect(document.getElementById('faviconLink').getAttribute('href')).toBe(envData.REACT_APP_THEME_FAVICON)
    expect(document.getElementById('siteTitle').innerHTML).toBe(envData.REACT_APP_PAGE_TITLE)
    expect(document.getElementById('themeColor').getAttribute('content')).toBe(envData.REACT_APP_THEME_COLOR)
  })

  test('renders ErrorHandler on API failure', async () => {
    axios.get.mockRejectedValue(new Error('API Error'))
    require('./index') // Import the index.js file to execute it
    await new Promise(process.nextTick) // Wait for promises to resolve

    // Verify that axios.get was called
    expect(axios.get).toHaveBeenCalledWith('http://localhost/envData')

    // Verify that the app root was rendered with the ErrorHandler
    const root = require('react-dom/client').createRoot()
    expect(root.render).toHaveBeenCalledWith(
      <ErrorHandler error={{ message: 'API Error', stacktrace: undefined, level: 'error' }} />
    )
  })
})

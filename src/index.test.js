import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import axios from 'axios'
import axiosMock from 'axios-mock-adapter'
import App from './App'
import reportWebVitals from './reportWebVitals'

// Mocking axios
const mock = new axiosMock(axios)

// Mocking environment variables
process.env.REACT_APP_USE_API_URL_LOCAL = '1'
process.env.REACT_APP_API_URL_LOCAL = 'http://localhost:3000'

// Mocking reportWebVitals
jest.mock('./reportWebVitals', () => jest.fn())

// Mocking App component
jest.mock('./App', () => {
  return function DummyApp(props) {
    return <div data-testid="app">App Component - {JSON.stringify(props.appVariables)}</div>
  }
})

describe('Main entry point', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="root"></div>
      <link id="appManifest" />
      <link id="faviconLink" />
      <title id="siteTitle"></title>
      <meta id="themeColor" />
    `
  })

  test('renders App component with environment variables', async () => {
    const envData = {
      REACT_APP_MANIFEST: '{"name":"My App"}',
      REACT_APP_THEME_FAVICON: '/favicon.ico',
      REACT_APP_PAGE_TITLE: 'My App',
      REACT_APP_THEME_COLOR: '#FFFFFF',
    }

    const processEnv = process.env

    mock.onGet('/api').reply(200, envData)

    require('./index') // Trigger the code

    await waitFor(() => {
      expect(screen.getByTestId('app')).toBeInTheDocument()
    })

    expect(screen.getByTestId('app').textContent).toContain('My App')

    const manifestLink = document.getElementById('appManifest')
    expect(manifestLink.getAttribute('href')).toContain('blob:')

    const favLink = document.getElementById('faviconLink')
    expect(favLink.getAttribute('href')).toBe(envData.REACT_APP_THEME_FAVICON)

    const siteTitle = document.getElementById('siteTitle')
    expect(siteTitle.innerHTML).toBe(envData.REACT_APP_PAGE_TITLE)

    const themeColor = document.getElementById('themeColor')
    expect(themeColor.getAttribute('content')).toBe(envData.REACT_APP_THEME_COLOR)

    expect(reportWebVitals).toHaveBeenCalled()
  })

  test('renders error message on API failure', async () => {
    mock.onGet('/api').reply(500)

    require('./index') // Trigger the code

    await waitFor(() => {
      expect(screen.getByText('Internal Server Error')).toBeInTheDocument()
    })
  })
})

import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { useGetQuery } from './lib/api/get'
import { Website } from './modules/website/Website'
import { Error404 } from './common/Error404'
import { Landing } from './modules/website/Landing'

// Mock the necessary modules
jest.mock('./lib/api/get')
jest.mock('./modules/website/Website', () => ({
  Website: jest.fn(() => <div>Website Component</div>),
}))
jest.mock('./common/Error404', () => ({
  Error404: jest.fn(() => <div>Error404 Component</div>),
}))
jest.mock('./modules/website/Landing', () => ({
  Landing: jest.fn(() => <div>Landing Component</div>),
}))
jest.mock('./lib/appDataProcessor', () => ({
  appDataProcessor: jest.fn((data) => ({
    routesData: data.data.routes || [],
  })),
}))

const envData = {
  REACT_APP_API_URL_WEB: 'https://api.example.com',
}

describe('App component', () => {
  test('displays loading screen while fetching app data', () => {
    useGetQuery.mockReturnValue({ isLoading: true })

    render(
      <Router>
        <App envData={envData} isLocalEnvironment="true" />
      </Router>,
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders routes correctly when app data is fetched', async () => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data:{
        routes: [
          {
            apiEndPointSchema: {},
            component: '',
            exact: true,
            isAuthenticated: false,
            isDefault: true,
            isPrivate: false,
            isSPA: false,
            name: 'Home',
            pageId: 'D5E934D7-5714-4B60-A62A-42AC6E204998',
            pageTitle: 'Thulisha Reddy Foundation - Webapp',
            path: '/',
          },
        ]
      }
    })

    render(
      <Router>
        <App envData={envData} isLocalEnvironment="true" />
      </Router>,
    )

    await waitFor(() => expect(screen.getByText('Website Component')).toBeInTheDocument())
  })

  test('renders Landing component when no routes are available', async () => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data: { routes: [] },
    })

    render(
      <Router>
        <App envData={envData} isLocalEnvironment="true" />
      </Router>,
    )

    await waitFor(() => expect(screen.getByText('Landing Component')).toBeInTheDocument())
  })

  test('renders Error404 component for unknown routes', async () => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data:{
        routes: [
          {
            apiEndPointSchema: {},
            component: '',
            exact: true,
            isAuthenticated: false,
            isDefault: true,
            isPrivate: false,
            isSPA: false,
            name: 'Home',
            pageId: 'D5E934D7-5714-4B60-A62A-42AC6E204998',
            pageTitle: 'Thulisha Reddy Foundation - Webapp',
            path: '/',
          },
        ]
      }
    })

    render(
      <Router initialEntries={['/unknown']}>
        <App envData={envData} isLocalEnvironment="true" />
      </Router>,
    )

    await waitFor(() => expect(screen.getByText('Error404 Component')).toBeInTheDocument())
  })
})

import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { useGetQuery } from './lib/api/get'

// Mocking the useGetQuery hook
jest.mock('./lib/api/get', () => ({
  useGetQuery: jest.fn(),
}))

jest.mock('./lib/appDataProcessor', () => ({
  appDataProcessor: jest.fn((data) => ({
    routesData: data.data.routes || [],
  })),
}))

const mockEnvData = {
  REACT_APP_API_URL_WEB: 'https://api.example.com',
}

describe('App', () => {
  it('renders loading state initially', () => {
    useGetQuery.mockReturnValue({ isLoading: true })

    render(
      <BrowserRouter>
        <App envData={mockEnvData} isLocalEnvironment="1" />
      </BrowserRouter>,
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders routes after data is fetched', async () => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data: {
        routesData: [{ path: '/', name: 'Home' }],
      },
    })

    render(
      <BrowserRouter>
        <App envData={mockEnvData} isLocalEnvironment="1" />
      </BrowserRouter>,
    )

    await waitFor(() => expect(screen.getByText('Home')).toBeInTheDocument())
  })

  it('renders 404 page for unknown routes', async () => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data: {
        routesData: [],
      },
    })

    render(
      <BrowserRouter>
        <App envData={mockEnvData} isLocalEnvironment="1" />
      </BrowserRouter>,
    )

    await waitFor(() => expect(screen.getByText('Page Not Found')).toBeInTheDocument())
  })
})

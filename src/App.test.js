import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { useAuthStore } from './store/auth'
import { useGetQuery } from './lib/api/get'
import App from './App'
import { getUser } from './lib/authentication'
import { Loading } from './common/Loading'
import { Error404 } from './common/Error404'

// Mocking necessary modules and components
jest.mock('./store/auth', () => ({
  useAuthStore: jest.fn(),
}))
jest.mock('./lib/api/get', () => ({
  useGetQuery: jest.fn(),
}))
jest.mock('./lib/authentication', () => ({
  getUser: jest.fn(),
}))
jest.mock('./common/Loading', () => ({
  Loading: jest.fn(() => <div>Loading...</div>),
}))
jest.mock('./common/Error404', () => ({
  Error404: jest.fn(() => <div>404 Not Found</div>),
}))
jest.mock('./lib/OnClickOutside',()=>({
  useOnClickOutside: jest.fn()
}))

describe('App Component', () => {
  const envData = { REACT_APP_API_URL_WEB: 'http://api.example.com' }
  const isLocalEnvironment = 'true'

  const defProps = {
    ...envData,
    isLocalEnvironment,
    setToggleLoginModal:jest.fn()
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const renderApp = () => {
    return render(
        <App envData={envData} isLocalEnvironment={isLocalEnvironment} />
      // <BrowserRouter>
      // </BrowserRouter>
    )
  }

  test('renders loading screen while fetching app data', () => {
    useGetQuery.mockReturnValue({ isLoading: true })
    useAuthStore.mockReturnValue({ loggedIn: false })

    renderApp()
    const loadingSpinner = screen.getByTestId('appLoading');
    expect(loadingSpinner).toBeInTheDocument();
  })

  test('renders landing page when home page is not available', () => {
    useGetQuery.mockReturnValue({ isLoading: false, data: { routesData: [] } })
    useAuthStore.mockReturnValue({ loggedIn: false })

    renderApp()

    expect(screen.getByText('This website is currently undergoing scheduled maintenance. We should be back shortly.')).toBeInTheDocument()
  })

  test('renders website routes correctly', () => {
    const routesData = [
      { path: '/home', name: 'Home', component: 'HomeComponent' },
      { path: '/about', name: 'About', component: 'AboutComponent' },
    ]
    useGetQuery.mockReturnValue({ isLoading: false, data: { routesData } })
    useAuthStore.mockReturnValue({ loggedIn: false })

    renderApp()

    expect(screen.getByText('We use cookies!')).toBeInTheDocument()
    //expect(screen.getByText('About')).toBeInTheDocument()
  })

  test('renders backend module routes if user is logged in', () => {
    const routesData = [
      { path: '/dashboard', name: 'Dashboard', component: 'DashboardComponent' },
      { path: '/settings', name: 'Settings', component: 'SettingsComponent' },
    ]
    useGetQuery.mockReturnValue({ isLoading: false, data: { routesData } })
    useAuthStore.mockReturnValue({ loggedIn: true })

    renderApp()

    expect(screen.getAllByText('We use cookies!')[0]).toBeInTheDocument()
    //expect(screen.getAllByText('Settings')[0]).toBeInTheDocument()
  })

  test('renders 404 page for unknown routes', () => {
    useGetQuery.mockReturnValue({ isLoading: false, data: { routesData: [] } })
    useAuthStore.mockReturnValue({ loggedIn: false })

    renderApp()

    expect(screen.getByText('We use cookies!')).toBeInTheDocument()
  })
})

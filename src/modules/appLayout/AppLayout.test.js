import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppLayout } from './AppLayout'
import { useGetQuery } from '../../lib/api/get'

jest.mock('../../lib/api/get')
jest.mock('../../lib/OnClickOutside', () => ({
  useOnClickOutside: jest.fn(),
}))

const mockEnvData = {
  REACT_APP_API_URL_WEB: 'http://api.example.com',
  REACT_APP_THEME_COLOR: 'blue',
}

const mockAuthDetails = {
  user: 'testUser',
}

const mockRouteData = {
  apiEndPointSchema: {
    api: 'testApi',
    urlParams: '?test=true',
  },
}

const mockSetToggleLoginModal = jest.fn()

describe('AppLayout', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders loading spinner when data is loading', () => {
    useGetQuery.mockReturnValue({ isLoading: true })

    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={mockSetToggleLoginModal}
        authDetails={mockAuthDetails}
        routeData={mockRouteData}
      />
    )

    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('renders child components when data is loaded', () => {
    useGetQuery.mockReturnValue({ isLoading: false, data: {} })

    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={mockSetToggleLoginModal}
        authDetails={mockAuthDetails}
        routeData={mockRouteData}
      />
    )

    expect(screen.getByText('Header Component')).toBeInTheDocument()
    expect(screen.getByText('Menubar Component')).toBeInTheDocument()
    expect(screen.getByText('Footer Component')).toBeInTheDocument()
  })

  it('toggles side menu when toggleMenu state changes', () => {
    useGetQuery.mockReturnValue({ isLoading: false, data: {} })
    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={mockSetToggleLoginModal}
        authDetails={mockAuthDetails}
        routeData={mockRouteData}
      />
    )

    const toggleButton = screen.getByText('Toggle Menu')

    fireEvent.click(toggleButton)
    expect(screen.getByText('Menubar Open')).toBeInTheDocument()

    fireEvent.click(toggleButton)
    expect(screen.getByText('Menubar Closed')).toBeInTheDocument()
  })
})

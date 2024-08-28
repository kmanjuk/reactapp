import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppLayout } from './AppLayout'
import { useGetQuery } from '../../lib/api/get'
import { Profile } from '../profile/Profile'
import { Messages } from '../messages/Messages'

// Mock the useGetQuery hook
jest.mock('../../lib/api/get', () => ({
  useGetQuery: jest.fn(),
}))

// Mock the Profile and Messages components
jest.mock('../profile/Profile', () => ({
  Profile: jest.fn(() => <div>Profile Component</div>),
}))

jest.mock('../messages/Messages', () => ({
  Messages: jest.fn(() => <div>Messages Component</div>),
}))

describe('AppLayout', () => {
  const mockEnvData = {
    REACT_APP_API_URL_WEB: 'https://api.example.com',
  }
  
  const mockRouteData = {
    component: 'Profile',
    apiEndPointSchema: JSON.stringify({
      api: 'profileData',
      urlParams: {},
    }),
  }
  
  const mockAuthDetails = {
    loggedIn: true,
    session: { pages: [], user:{userFullName:"K",} },
    authentication: {
      user:{
        profile:{
          photos:[
            {
              value:''
            }
          ]
        }
      }
    }
  }
  
  const mockAppDataParsed = {
    routesData: [
      { pageName: 'Profile', isPrivate: 1 },
      { pageName: 'Messages', isPrivate: 1 },
    ],
  }

  beforeEach(() => {
    useGetQuery.mockReturnValue({
      isLoading: false,
      data: { some: 'data' },
    })
  })

  it('renders the loading spinner when data is loading', () => {
    useGetQuery.mockReturnValueOnce({
      isLoading: true,
      data: null,
    })

    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={jest.fn()}
        authDetails={mockAuthDetails}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        appDataParsed={mockAppDataParsed}
      />
    )

    const loadingSpinner = screen.getAllByRole('status')
    expect(loadingSpinner).toHaveLength(2) // Expecting two loading spinners (one for desktop, one for mobile)
  })

  it('renders the Profile component if routeData.component is Profile', () => {
    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={jest.fn()}
        authDetails={mockAuthDetails}
        routeData={mockRouteData}
        isLocalEnvironment="true"
        appDataParsed={mockAppDataParsed}
      />
    )

    expect(screen.getByText('Profile Component')).toBeInTheDocument()
  })

  it('renders the Messages component if routeData.component is Messages', () => {
    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={jest.fn()}
        authDetails={mockAuthDetails}
        routeData={{ ...mockRouteData, component: 'Messages' }}
        isLocalEnvironment="true"
        appDataParsed={mockAppDataParsed}
      />
    )

    expect(screen.getByText('Messages Component')).toBeInTheDocument()
  })

  it('renders the AppLayoutModuleNotFound component if routeData.component is invalid', () => {
    render(
      <AppLayout
        envData={mockEnvData}
        setToggleLoginModal={jest.fn()}
        authDetails={mockAuthDetails}
        routeData={{ ...mockRouteData, component: 'InvalidComponent' }}
        isLocalEnvironment="true"
        appDataParsed={mockAppDataParsed} 
      />
    )

    expect(screen.getByText('Module Not Found')).toBeInTheDocument()
  })
})

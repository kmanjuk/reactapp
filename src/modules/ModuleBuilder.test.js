import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ModuleBuilder } from './ModuleBuilder'
import { Notifications } from '../common/notifications/Notifications'
import { AppLayout } from './appLayout/AppLayout'
import { LoginModal } from '../common/LoginModal'

// Mocking the imported components
jest.mock('../common/notifications/Notifications', () => ({
  Notifications: jest.fn(() => <div>Mocked Notifications Component</div>),
}))

jest.mock('./appLayout/AppLayout', () => ({
  AppLayout: jest.fn(() => <div>Mocked AppLayout Component</div>),
}))

jest.mock('../common/LoginModal', () => ({
  LoginModal: jest.fn(() => <div>Mocked LoginModal Component</div>),
}))

describe('ModuleBuilder', () => {
  const mockProps = {
    envData: {
      theme: 'dark',
      logoUrl: 'https://example.com/logo.png',
    },
    setToggleLoginModal: jest.fn(),
    toggleLoginModal: true,
    sideLoginModalRef: React.createRef(),
    isLocalEnvironment: 'true',
    authDetails: {
      user: {
        name: 'John Doe',
      },
    },
    appDataParsed: {
      routesData: [],
    },
    routeData: {
      path: '/dashboard',
      component: 'Dashboard',
    },
  }

  it('renders the component with correct structure', () => {
    render(
        <ModuleBuilder {...mockProps} />
    )

    expect(screen.getByText('Mocked Notifications Component')).toBeInTheDocument()
    expect(screen.getByText('Mocked AppLayout Component')).toBeInTheDocument()
  })

  it('sets preload styles using Helmet', () => {
    render(
      <ModuleBuilder {...mockProps} />
    )

    // Check that Helmet is setting the preload links correctly
    expect(document.querySelector('link[rel="preload"][href="/css/bootstrap.min.css"]')).toBeInTheDocument()
    expect(document.querySelector('link[rel="preload"][href="/css/app.min.css"]')).toBeInTheDocument()
  })

  it('conditionally renders the LoginModal component based on toggleLoginModal prop', () => {
    const { rerender } = render(
      <ModuleBuilder {...mockProps} />
    )

    expect(screen.getByText('Mocked LoginModal Component')).toBeInTheDocument()

    rerender(
      <ModuleBuilder {...mockProps} />
    )

    expect(screen.queryByText('Mocked LoginModal Component')).not.toBeInTheDocument()
  })

  it('passes the correct props to AppLayout and LoginModal', () => {
    render(
      <ModuleBuilder {...mockProps} />
    )

    // Verify the props passed to AppLayout
    expect(AppLayout).toHaveBeenCalledWith(
      expect.objectContaining({
        setToggleLoginModal: mockProps.setToggleLoginModal,
        toggleLoginModal: mockProps.toggleLoginModal,
        sideLoginModalRef: mockProps.sideLoginModalRef,
        envData: mockProps.envData,
        isLocalEnvironment: mockProps.isLocalEnvironment,
        authDetails: mockProps.authDetails,
        routeData: mockProps.routeData,
        appDataParsed: mockProps.appDataParsed,
      }),
      {}
    )

    // Verify the props passed to LoginModal when it's rendered
    expect(LoginModal).toHaveBeenCalledWith(
      expect.objectContaining({
        setToggleLoginModal: mockProps.setToggleLoginModal,
        toggleLoginModal: mockProps.toggleLoginModal,
        sideLoginModalRef: mockProps.sideLoginModalRef,
        envData: mockProps.envData,
        isLocalEnvironment: mockProps.isLocalEnvironment,
        appDataParsed: mockProps.appDataParsed,
      }),
      {}
    )
  })
})

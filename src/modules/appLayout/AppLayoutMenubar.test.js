import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutMenubar } from './AppLayoutMenubar'

const mockRoutesData = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    isPrivate: true,
    pageTitle: 'Dashboard',
    apiEndPointSchema: {
      icon: 'dashboard',
      group: 'Main',
      noMenu: false,
    },
  },
  {
    name: 'Settings',
    path: 'settings',
    isPrivate: true,
    pageTitle: 'Settings',
    apiEndPointSchema: {
      icon: 'settings',
      group: 'User',
      noMenu: false,
    },
  },
]

const mockAuthDetails = {
  role: 'admin',
  session: {
    pages: [
      {
        pageName: 'Dashboard',
        roles: [{ roleName: 'admin' }],
      },
      {
        pageName: 'Settings',
        roles: [{ roleName: 'admin' }],
      },
    ],
  },
}

const mockEnvData = {
  REACT_APP_THEME_LOGO: 'mockLogo.png',
}

const mockSideMenuRef = {
  current: null,
}

const mockSetToggleMenu = jest.fn()

describe('AppLayoutMenubar', () => {
  test('renders menu items based on user role and route configuration', () => {
    render(
      <AppLayoutMenubar
        envData={mockEnvData}
        toggleMenu={true}
        setToggleMenu={mockSetToggleMenu}
        sideMenuRef={mockSideMenuRef}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
      />
    )

    // Check that the menu items are rendered
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  test('groups and sorts menu items correctly', () => {
    render(
      <AppLayoutMenubar
        envData={mockEnvData}
        toggleMenu={true}
        setToggleMenu={mockSetToggleMenu}
        sideMenuRef={mockSideMenuRef}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
      />
    )

    // Check that the menu group titles are rendered
    expect(screen.getByText('Main')).toBeInTheDocument()
    expect(screen.getByText('User')).toBeInTheDocument()

    // Ensure the menu items are sorted within their groups
    const menuItems = screen.getAllByRole('link')
    expect(menuItems[0]).toHaveTextContent('Dashboard')
    expect(menuItems[1]).toHaveTextContent('Settings')
  })

  test('renders logo correctly based on environment data', () => {
    render(
      <AppLayoutMenubar
        envData={mockEnvData}
        toggleMenu={true}
        setToggleMenu={mockSetToggleMenu}
        sideMenuRef={mockSideMenuRef}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
      />
    )

    const logos = screen.getAllByRole('img')
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', 'mockLogo.png')
    })
  })

  test('calls setToggleMenu when a menu item is clicked', () => {
    render(
      <AppLayoutMenubar
        envData={mockEnvData}
        toggleMenu={true}
        setToggleMenu={mockSetToggleMenu}
        sideMenuRef={mockSideMenuRef}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
      />
    )

    const dashboardLink = screen.getByText('Dashboard')
    dashboardLink.click()

    expect(mockSetToggleMenu).toHaveBeenCalledWith(false)
  })
})

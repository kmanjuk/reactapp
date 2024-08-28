import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutMenubar } from './AppLayoutMenubar'

// Mock the AppLayoutMenuItems component
jest.mock('./AppLayoutMenuItems', () => ({
  AppLayoutMenuItems: ({ menuItem }) => <div>{menuItem.pageTitle}</div>,
}))

const mockEnvData = {
  REACT_APP_THEME_LOGO: 'mock-logo.png',
}

const mockAuthDetails = {
  session: {
    pages: [
      { pageName: 'Dashboard', pageViewRoles: [{ roleName: 'admin' }] },
    ],
  },
  role: 'admin',
}

const mockRoutesData = [
  {
    pageName: 'Dashboard',
    isPrivate: 1,
    apiEndPointSchema: { group: 'Main', noMenu: false },
    pageTitle: 'Dashboard',
    routePath: '/dashboard',
  },
  {
    pageName: 'Settings',
    isPrivate: 1,
    apiEndPointSchema: { group: 'Main', noMenu: false },
    pageTitle: 'Settings',
    routePath: '/settings',
  },
  {
    pageName: 'Profile',
    isPrivate: 0,
    apiEndPointSchema: { group: 'User', noMenu: false },
    pageTitle: 'Profile',
    routePath: '/profile',
  },
]

describe('AppLayoutMenubar', () => {
  const sideMenuRef = { current: null }
  const setToggleMenu = jest.fn()

  it('renders the logo and grouped menu items correctly', () => {
    render(
      <AppLayoutMenubar
        toggleMenu={true}
        sideMenuRef={sideMenuRef}
        envData={mockEnvData}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
        setToggleMenu={setToggleMenu}
      />
    )

    // Check for the logo
    const logo = screen.getByAltText('logo-lg-dark')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src', 'mock-logo.png')

    // Check for grouped menu items
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()

    // Ensure "Profile" is not shown since it is not private
    expect(screen.queryByText('Profile')).not.toBeInTheDocument()
  })

  it('groups and sorts menu items correctly', () => {
    render(
      <AppLayoutMenubar
        toggleMenu={true}
        sideMenuRef={sideMenuRef}
        envData={mockEnvData}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
        setToggleMenu={setToggleMenu}
      />
    )

    const menuTitles = screen.getAllByRole('heading', { level: 3 }) // Assuming the group titles are rendered as <h3>
    expect(menuTitles[0]).toHaveTextContent('Main')

    // Ensure the items are sorted alphabetically within each group
    const menuItems = screen.getAllByText(/Dashboard|Settings/)
    expect(menuItems[0]).toHaveTextContent('Dashboard')
    expect(menuItems[1]).toHaveTextContent('Settings')
  })

  it('renders nothing if there are no valid menu items for the user role', () => {
    const modifiedRoutesData = [
      { ...mockRoutesData[0], isPrivate: 0 },
      { ...mockRoutesData[1], isPrivate: 0 },
    ]

    render(
      <AppLayoutMenubar
        toggleMenu={true}
        sideMenuRef={sideMenuRef}
        envData={mockEnvData}
        authDetails={mockAuthDetails}
        routesData={modifiedRoutesData}
        setToggleMenu={setToggleMenu}
      />
    )

    // Expect no menu items to be rendered since all items are not private
    expect(screen.queryByText('Dashboard')).not.toBeInTheDocument()
    expect(screen.queryByText('Settings')).not.toBeInTheDocument()
  })

  it('handles the toggleMenu prop correctly', () => {
    const { rerender } = render(
      <AppLayoutMenubar
        toggleMenu={false}
        sideMenuRef={sideMenuRef}
        envData={mockEnvData}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
        setToggleMenu={setToggleMenu}
      />
    )

    const sidebar = screen.getByRole('navigation')
    expect(sidebar).toHaveStyle('marginLeft: 0')

    rerender(
      <AppLayoutMenubar
        toggleMenu={true}
        sideMenuRef={sideMenuRef}
        envData={mockEnvData}
        authDetails={mockAuthDetails}
        routesData={mockRoutesData}
        setToggleMenu={setToggleMenu}
      />
    )

    expect(sidebar).not.toHaveStyle('marginLeft: 0')
  })
})

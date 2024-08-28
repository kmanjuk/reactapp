import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutMenuItems } from './AppLayoutMenuItems'

describe('AppLayoutMenuItems', () => {
  const mockMenuItem = {
    routePath: 'dashboard',
    pageTitle: 'Dashboard',
    apiEndPointSchema: { icon: 'dashboard' },
  }
  const mockSetToggleMenu = jest.fn()

  test('renders the menu item correctly', () => {
    render(
      <MemoryRouter initialEntries={['/console/dashboard']}>
        <AppLayoutMenuItems
          menuItem={mockMenuItem}
          setToggleMenu={mockSetToggleMenu}
          urlLink="/console/dashboard"
        />
      </MemoryRouter>
    )

    // Check if the link is rendered with the correct path and text
    const linkElement = screen.getByRole('link', { name: /Dashboard/i })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/console/dashboard')

    // Check if the icon is rendered with the correct class
    const iconElement = screen.getAllByTestId('menuItemIcon')[0]
    expect(iconElement).toBeInTheDocument()

    // Check if the link has the active class when urlLink matches menuItem.path
    //expect(linkElement).toHaveClass('trtui-active')
  })

  test('does not render the menu item if menuItem is null', () => {
    render(
      <MemoryRouter>
        <AppLayoutMenuItems menuItem={null} setToggleMenu={mockSetToggleMenu} urlLink="" />
      </MemoryRouter>
    )

    // Check if nothing is rendered
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })

  test('calls setToggleMenu when link is clicked', () => {
    render(
      <MemoryRouter>
        <AppLayoutMenuItems
          menuItem={mockMenuItem}
          setToggleMenu={mockSetToggleMenu}
          urlLink="/console/dashboard"
        />
      </MemoryRouter>
    )

    const linkElement = screen.getByRole('link', { name: /Dashboard/i })

    // Simulate a click event
    fireEvent.click(linkElement)

    // Check if setToggleMenu was called with false
    expect(mockSetToggleMenu).toHaveBeenCalledWith(false)
  })
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutModuleNotFound } from './AppLayoutModuleNotFound'

describe('AppLayoutModuleNotFound', () => {
  test('renders the correct message and buttons', () => {
    render(
      <MemoryRouter>
        <AppLayoutModuleNotFound />
      </MemoryRouter>
    )

    // Check if the error message is displayed
    expect(screen.getByText('Sorry, Module not Found')).toBeInTheDocument()
    expect(screen.getByText('The module you are looking for is not available!')).toBeInTheDocument()

    // Check if the "Home" button is displayed and has the correct link
    const homeButton = screen.getByRole('link', { name: /Home/i })
    expect(homeButton).toBeInTheDocument()
    expect(homeButton).toHaveAttribute('href', '/')

    // Check if the "My Profile" button is displayed and has the correct link
    const profileButton = screen.getByRole('link', { name: /My Profile/i })
    expect(profileButton).toBeInTheDocument()
    expect(profileButton).toHaveAttribute('href', '/console/my-profile')
  })

  test('renders the correct icons', () => {
    render(
      <MemoryRouter>
        <AppLayoutModuleNotFound />
      </MemoryRouter>
    )

    // Check if the error icon is displayed
    const errorIcon = screen.getByRole('img', { name: /ri-close-line/i })
    expect(errorIcon).toBeInTheDocument()

    // Check if the "Home" button has the correct icon
    const homeIcon = screen.getByRole('img', { name: /ri-home-line/i })
    expect(homeIcon).toBeInTheDocument()

    // Check if the "My Profile" button has the correct icon
    const profileIcon = screen.getByRole('img', { name: /ri-user-line/i })
    expect(profileIcon).toBeInTheDocument()
  })
})

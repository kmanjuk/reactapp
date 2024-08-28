import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import { AppLayoutModuleNotFound } from './AppLayoutModuleNotFound'

describe('AppLayoutModuleNotFound', () => {
  it('renders the "Module Not Found" message', () => {
    render(
      <BrowserRouter>
        <AppLayoutModuleNotFound />
      </BrowserRouter>
    )

    expect(screen.getByText('Sorry, Module not Found')).toBeInTheDocument()
    expect(screen.getByText('The module you are looking for is not available!')).toBeInTheDocument()
  })

  it('renders the "Home" button with correct link', () => {
    render(
      <BrowserRouter>
        <AppLayoutModuleNotFound />
      </BrowserRouter>
    )

    const homeLink = screen.getByRole('link', { name: /Home/i })
    expect(homeLink).toBeInTheDocument()
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders the "My Profile" button with correct link', () => {
    render(
      <BrowserRouter>
        <AppLayoutModuleNotFound />
      </BrowserRouter>
    )

    const profileLink = screen.getByRole('link', { name: /My Profile/i })
    expect(profileLink).toBeInTheDocument()
    expect(profileLink).toHaveAttribute('href', '/console/my-profile')
  })
})

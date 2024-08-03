import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppLayoutMenubar } from './AppLayoutMenubar'

describe('AppLayoutMenubar', () => {
  const mockEnvData = {
    REACT_APP_THEME_FAVICON: 'favicon.png',
    REACT_APP_THEME_LOGO: 'logo.png',
  }
  const mockSideMenuRef = { current: null }
  const mockSetToggleMenu = jest.fn()

  it('renders the menubar component', () => {
    render(
      <Router>
        <AppLayoutMenubar
          envData={mockEnvData}
          toggleMenu={false}
          setToggleMenu={mockSetToggleMenu}
          sideMenuRef={mockSideMenuRef}
        />
      </Router>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('displays the logos', () => {
    render(
      <Router>
        <AppLayoutMenubar
          envData={mockEnvData}
          toggleMenu={false}
          setToggleMenu={mockSetToggleMenu}
          sideMenuRef={mockSideMenuRef}
        />
      </Router>
    )

    expect(screen.getAllByAltText('logo-sm-dark')[0]).toBeInTheDocument()
    expect(screen.getAllByAltText('logo-lg-dark')[0]).toBeInTheDocument()
    expect(screen.getAllByAltText('logo-sm-light')[0]).toBeInTheDocument()
    expect(screen.getAllByAltText('logo-lg-light')[0]).toBeInTheDocument()
  })

  it('has a clickable vertical hover button', () => {
    render(
      <Router>
        <AppLayoutMenubar
          envData={mockEnvData}
          toggleMenu={false}
          setToggleMenu={mockSetToggleMenu}
          sideMenuRef={mockSideMenuRef}
        />
      </Router>
    )

    const hoverButton = screen.getByRole('button', { name: /vertical-hover/i })
    expect(hoverButton).toBeInTheDocument()
    fireEvent.click(hoverButton)
    // Since we don't have a specific function for the hover button, we just check that it is clickable
  })
})

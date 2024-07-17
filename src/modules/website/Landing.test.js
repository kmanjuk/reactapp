import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Landing } from './Landing'
import { BrowserRouter as Router } from 'react-router-dom'

jest.mock('../../assets/css/bootstrap.min.css', () => {})
jest.mock('../../assets/css/icons.min.css', () => {})
jest.mock('../../assets/css/app.min.css', () => {})
jest.mock('../../assets/images/bg-pattern.png', () => 'bg-pattern.png')

const envData = {
  REACT_APP_THEME_LOGO: 'logo.png'
}

describe('Landing component', () => {
  test('loads CSS files on mount', () => {
    render(
      <Router>
        <Landing envData={envData} />
      </Router>
    )

    // Verify CSS files were imported
    expect(require('../../assets/css/bootstrap.min.css')).toBeDefined()
    expect(require('../../assets/css/icons.min.css')).toBeDefined()
    expect(require('../../assets/css/app.min.css')).toBeDefined()
  })

  test('renders logo correctly', () => {
    render(
      <Router>
        <Landing envData={envData} />
      </Router>
    )

    const logos = screen.getAllByAltText(/logo/i)
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', 'logo.png')
    })
  })

  test('renders maintenance message', () => {
    render(
      <Router>
        <Landing envData={envData} />
      </Router>
    )

    expect(screen.getByText(/Website Under Maintenance/i)).toBeInTheDocument()
    expect(
      screen.getByText(/This website is currently undergoing scheduled maintenance/i)
    ).toBeInTheDocument()
  })

  test('renders contact link', () => {
    render(
      <Router>
        <Landing envData={envData} />
      </Router>
    )

    const contactLink = screen.getByText(/Contact Web Admin/i)
    expect(contactLink).toBeInTheDocument()
    expect(contactLink.closest('a')).toHaveAttribute('href', '/')
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { T1Navbar } from './T1Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

// Test case data
const pageData = {
  content: {
    content: {
      isTopBar: true,
      topBarLinks: [
        { name: 'Link 1', link: '/link1' },
        { name: 'Link 2', link: '/link2' },
      ],
      topBarPhone: '123-456-7890',
      topBarEmail: 'example@example.com',
      logo: 'logo.png',
      logoTitle: 'Logo Title',
      navLinks: [
        { name: 'Nav 1', link: '/nav1', childItems: [{ name: 'SubNav 1', link: '/subnav1' }] },
        { name: 'Nav 2', link: '/nav2' },
      ],
    },
  },
}

describe('T1Navbar Component', () => {
  it('should render the component with initial props', () => {
    render(
      <Router>
        <T1Navbar isLoggedIn={false} setLoginModal={jest.fn()} pageData={pageData} />
      </Router>
    )

    // Test top bar visibility
    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('example@example.com')).toBeInTheDocument()

    // Test logo
    expect(screen.getByAltText('Logo Title')).toBeInTheDocument()

    // Test navigation links
    expect(screen.getAllByText('Nav 1')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Nav 2')[0]).toBeInTheDocument()
  })

  it('should render the component with initial props in mobile view', () => {
    render(
      <Router>
        <T1Navbar isLoggedIn={false} setLoginModal={jest.fn()} pageData={pageData} />
      </Router>
    )
// Change the viewport to 500px.
global.innerWidth = 500;
    // Test top bar visibility
    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
    expect(screen.getByText('123-456-7890')).toBeInTheDocument()
    expect(screen.getByText('example@example.com')).toBeInTheDocument()

    // Test logo
    expect(screen.getByAltText('Logo Title')).toBeInTheDocument()

    // Test navigation links
    expect(screen.getAllByText('Nav 1')[1]).toBeInTheDocument()
    expect(screen.getAllByText('Nav 2')[1]).toBeInTheDocument()
  })

  it('should toggle mobile menu visibility', () => {
    render(
      <Router>
        <T1Navbar isLoggedIn={false} setLoginModal={jest.fn()} pageData={pageData} />
      </Router>
    )
// Change the viewport to 500px.
global.innerWidth = 500;

    // Check initial state of mobile menu
    const mobileMenuButton = screen.getByRole('button')
    const mobileMenu = screen.getByRole('menu')

    expect(mobileMenu).toHaveClass('t1-slicknav_hidden')

    // Click to open mobile menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenu).not.toHaveClass('t1-slicknav_hidden')

    // Click to close mobile menu
    fireEvent.click(mobileMenuButton)
    expect(mobileMenu).toHaveClass('t1-slicknav_hidden')

    //click menu
    const menubtn = screen.getByTestId('mobileMenuBtn')
    fireEvent.click(menubtn)
  })

  it('should show login link when not logged in', () => {
    const setLoginModalMock = jest.fn()
    render(
      <Router>
        <T1Navbar isLoggedIn={false} setLoginModal={setLoginModalMock} pageData={pageData} />
      </Router>
    )

    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument()
    fireEvent.click(screen.getByRole('link', { name: /login/i }))
    expect(setLoginModalMock).toHaveBeenCalled()
  })

  it('should show profile and logout links when logged in', () => {
    render(
      <Router>
        <T1Navbar isLoggedIn={true} setLoginModal={jest.fn()} pageData={pageData} />
      </Router>
    )

    expect(screen.getByRole('link', { name: /my profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument()
  })

  it('should show the top bar if isTopBar is true in pageData', () => {
    render(
      <Router>
        <T1Navbar isLoggedIn={false} setLoginModal={jest.fn()} pageData={pageData} />
      </Router>
    )

    expect(screen.getByText('Link 1')).toBeInTheDocument()
    expect(screen.getByText('Link 2')).toBeInTheDocument()
  })
})

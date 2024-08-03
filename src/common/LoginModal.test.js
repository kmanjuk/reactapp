import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LoginModal } from './LoginModal'

describe('LoginModal', () => {
  const envData = {
    REACT_APP_GOOGLE_LOGIN: '1',
    REACT_APP_FACEBOOK_LOGIN: '1',
    REACT_APP_LOCAL_LOGIN: '1',
  }
  const sideLoginModalRef = React.createRef()
  const isLocalEnvironment = 'http://localhost:3000'
  const setToggleLoginModal = jest.fn()
  const toggleLoginModal = true

  beforeEach(() => {
    render(
      <LoginModal
        sideLoginModalRef={sideLoginModalRef}
        toggleLoginModal={toggleLoginModal}
        envData={envData}
        isLocalEnvironment={isLocalEnvironment}
        setToggleLoginModal={setToggleLoginModal}
      />
    )
  })

  it('should render the login modal with correct styles and content', () => {
    expect(screen.getByRole('dialog')).toHaveStyle('display: block')
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText("Don't have an account? Contact admin")).toBeInTheDocument()
  })

  it('should render Google login button if REACT_APP_GOOGLE_LOGIN is set to 1', () => {
    const googleButton = screen.getByText(/Google/i)
    expect(googleButton).toBeInTheDocument()
  })

  it('should render Facebook login button if REACT_APP_FACEBOOK_LOGIN is set to 1', () => {
    const facebookButton = screen.getByText(/Facebook/i)
    expect(facebookButton).toBeInTheDocument()
  })

  it('should render Email login button if REACT_APP_LOCAL_LOGIN is set to 1', () => {
    const emailButton = screen.getByText(/Email/i)
    expect(emailButton).toBeInTheDocument()
  })

  it('should call setToggleLoginModal on Facebook login button click', () => {
    const facebookButton = screen.getByText(/Facebook/i)
    fireEvent.click(facebookButton)
    expect(setToggleLoginModal).toHaveBeenCalledWith(!toggleLoginModal)
  })

  it('should redirect to email login on Email button click', () => {
    const emailButton = screen.getByText(/Email/i)
    Object.defineProperty(window, 'open', {
      writable: true,
      value: jest.fn(),
    })
    fireEvent.click(emailButton)
    expect(window.open).toHaveBeenCalledWith(`${isLocalEnvironment}/auth/login`, '_self')
  })

  it('should redirect to Google login on Google button click', () => {
    const googleButton = screen.getByText(/Google/i)
    Object.defineProperty(window, 'open', {
      writable: true,
      value: jest.fn(),
    })
    fireEvent.click(googleButton)
    expect(window.open).toHaveBeenCalledWith(
      `${isLocalEnvironment}/auth/google?url=${window.location.origin}`,
      '_self'
    )
  })
})

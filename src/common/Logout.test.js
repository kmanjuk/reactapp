import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Logout } from './Logout'

// Mock localStorage
const mockRemoveItem = jest.fn()
global.localStorage = {
  removeItem: mockRemoveItem,
}

// Mock window.open
const mockWindowOpen = jest.fn()
global.window.open = mockWindowOpen

describe('Logout Component', () => {
  beforeEach(() => {
    mockRemoveItem.mockClear()
    mockWindowOpen.mockClear()
  })

  test('renders without crashing', () => {
    render(<Logout isLocalEnvironment="http://localhost:3000" />)
  })

  test('removes items from localStorage', () => {
    render(<Logout isLocalEnvironment="http://localhost:3000" />)
    expect(mockRemoveItem).toHaveBeenCalledWith('authenticateSession')
    expect(mockRemoveItem).toHaveBeenCalledWith('auth')
    expect(mockRemoveItem).toHaveBeenCalledWith('loggedIn')
  })

  test('redirects to the correct logout URL', () => {
    render(<Logout isLocalEnvironment="http://localhost:3000" />)
    const redirectURL = window.location.origin
    expect(mockWindowOpen).toHaveBeenCalledWith(
      `http://localhost:3000/auth/logout?url=${redirectURL}`,
      '_self'
    )
  })
})

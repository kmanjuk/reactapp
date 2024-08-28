import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CookieConsentComp } from './CookieConsent'

// Mocking the window.initCookieConsent function
window.initCookieConsent = jest.fn(() => ({
  run: jest.fn(),
}))

describe('CookieConsentComp', () => {
  beforeEach(() => {
    // Reset the mock before each test
    window.initCookieConsent.mockClear()
  })

  test('initializes cookie consent on mount', () => {
    render(<CookieConsentComp />)

    // Check if initCookieConsent was called once
    expect(window.initCookieConsent).toHaveBeenCalledTimes(1)
    // Check if the run method was called with the correct config
    expect(window.CC.run).toHaveBeenCalledWith(expect.any(Object))
  })

  test('does not reinitialize cookie consent if already initialized', () => {
    // Mocking the presence of 'cc--main' element
    document.body.innerHTML = '<div id="cc--main"></div>'

    render(<CookieConsentComp />)

    // Ensure initCookieConsent is not called again
    expect(window.initCookieConsent).not.toHaveBeenCalled()
  })
})

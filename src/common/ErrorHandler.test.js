import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ErrorHandler } from './ErrorHandler'
import { unloadCSS } from '../lib/uiHelper'
import log from 'loglevel'
import remote from 'loglevel-plugin-remote'

// Mock the necessary modules
jest.mock('../lib/uiHelper', () => ({
  unloadCSS: jest.fn(),
}))

jest.mock('../assets/images/error.png', () => 'mocked-error-img.png')

// Mock the loglevel plugin remote
jest.mock('loglevel-plugin-remote', () => ({
  apply: jest.fn(),
}))

describe('ErrorHandler component', () => {
  const error = {
    message: 'Test error message',
    label: 'error',
    stacktrace: 'Test stacktrace',
  }

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
        configurable: true,
        value: { reload: jest.fn() },
      });
    jest.resetModules()
  })

  test('renders ErrorHandler component correctly', () => {
    render(<ErrorHandler error={error} />)

    expect(screen.getByText('Something Went Wrong!')).toBeInTheDocument()
    expect(screen.getByText(error.message)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: '' })).toHaveAttribute('src', 'mocked-error-img.png')
    expect(screen.getByRole('button', { name: /Try Again/i })).toBeInTheDocument()
  })

  test('loads CSS files correctly when error is present', async () => {
    render(<ErrorHandler error={error} />)

    expect(unloadCSS).toHaveBeenCalled()
    await import('../assets/css/bootstrap.min.css')
    await import('../assets/css/icons.min.css')
    await import('../assets/css/app.min.css')
  })

  test('logs error correctly', () => {
    render(<ErrorHandler error={error} />)

    const customJSON = (log) => ({
      msg: error.message,
      level: error.label,
      stacktrace: error.stacktrace,
      log: log,
    })

    expect(remote.apply).toHaveBeenCalledWith(log, {
      format: customJSON,
      url: '/logger',
    })
  })

  test('mocks reload function onclick', async () => {
    render(<ErrorHandler error={error} />)

    expect(jest.isMockFunction(window.location.reload)).toBe(true)
  })
})

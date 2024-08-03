import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ErrorHandler } from './ErrorHandler'
import log from 'loglevel'
import remote from 'loglevel-plugin-remote'

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
    expect(screen.getByRole('img', { name: /error-500 image/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Try Again/i })).toBeInTheDocument()
  })

  test('logs error correctly', () => {
    render(<ErrorHandler error={error} />)

    const customJSON = {
      msg: error.message,
      level: error.label,
      stacktrace: error.stacktrace,
    }

    expect(remote.apply).toHaveBeenCalledWith(log, {
      format: customJSON,
      url: '/logger',
    })
  })

  test('mocks reload function onclick', async () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(<ErrorHandler error={error} />)
    const button = getByTestId("reload-button");
    fireEvent.click(button)
    expect(handleOnClick).toBeTruthy()
    expect(button).toHaveClass("trtui-btn-secondary")
  })
  
})

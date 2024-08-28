import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ErrorHandler } from './ErrorHandler'
import axios from 'axios'

// Mock axios post method
jest.mock('axios')

describe('ErrorHandler', () => {
  const error = new Error('Something went wrong!')

  beforeEach(() => {
    axios.post.mockResolvedValue({})
  })

  test('renders the error message', () => {
    render(<ErrorHandler error={error} />)
    expect(screen.getByText('Something Went Wrong!')).toBeInTheDocument()
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
  })

  test('renders the error image', () => {
    render(<ErrorHandler error={error} />)
    const imgElement = screen.getByAltText('error-500 image')
    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', 'error.png')
  })

  test('reloads the page on button click', () => {
    render(<ErrorHandler error={error} />)
    const reloadButton = screen.getByTestId('reload-button')
    Object.defineProperty(window, 'location', {
      value: { reload: jest.fn() },
      writable: true,
    })
    fireEvent.click(reloadButton)
    expect(window.location.reload).toHaveBeenCalled()
  })

  test('logs the error to the remote logging service', () => {
    render(<ErrorHandler error={error} />)
    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL}/logger`,
      { msg: error.message, error: error }
    )
  })

  test('renders the with isLocalEnvironment 1', () => {
    process.env.LOCAL_ENVIRONMENT = '1';
    render(<ErrorHandler error={error} />)
    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL}/logger`,
      { msg: error.message, error: error }
    )
  })

  test('renders the with isLocalEnvironment 0', () => {
    process.env.LOCAL_ENVIRONMENT = '0';
    render(<ErrorHandler error={error} />)
    expect(axios.post).toHaveBeenCalledWith(
      `${process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL}/logger`,
      { msg: error.message, error: error }
    )
  })

  test('should throw error and return catch block', () => {
    render(<ErrorHandler error={{throw:true}} />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})

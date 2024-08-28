import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Error404 } from './Error404'
import { unloadCSS } from '../lib/uiHelper'

// Mock the necessary modules
jest.mock('../lib/uiHelper', () => ({
  unloadCSS: jest.fn(),
}))

jest.mock('../assets/images/error400-cover.png', () => 'mocked-error-img.png')

describe('Error404 component', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  test('renders Error404 component correctly', () => {
    render(<Error404 pageNotFound={true} />)

    expect(screen.getAllByText('SORRY, PAGE NOT FOUND 😭')[0]).toBeInTheDocument()
    expect(screen.getAllByText('The page you are looking for is not available!')[0]).toBeInTheDocument()
    expect(screen.getByTestId('error404image')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Back To Home/i })).toBeInTheDocument()
  })
})

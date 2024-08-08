import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputFile } from './InputFile'

describe('InputFile Component', () => {
  const defaultProps = {
    field: {
      name: 'testFileField',
      placeholder: 'Upload File',
      size: '6',
      hidden: false,
    },
    errors: {},
    register: jest.fn(),
  }

  test('renders without crashing', () => {
    render(<InputFile {...defaultProps} />)
  })

  test('hides the field when hidden prop is true', () => {
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, hidden: true },
    }
    const { container } = render(<InputFile {...props} />)
    expect(container.firstChild).toHaveStyle('display: none')
  })

  test('displays error message when there are validation errors', () => {
    const props = {
      ...defaultProps,
      errors: {
        testFileField: {
          message: 'File is required',
        },
      },
    }
    render(<InputFile {...props} />)
    expect(screen.getByText('File is required')).toBeInTheDocument()
  })
})

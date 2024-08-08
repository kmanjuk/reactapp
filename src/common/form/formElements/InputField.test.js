import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputField } from './InputField'

describe('InputField Component', () => {
  const defaultProps = {
    field: {
      name: 'testField',
      type: 'text',
      placeholder: 'Test Placeholder',
      size: '6',
      hidden: false,
      defaultValue: '',
      hasPrefix: false,
      prefixKey: '',
      obj: [],
      valFromObj: false,
      noValueDisplay: false,
      noAutocomplete: false,
      disabled: false,
    },
    defaultData: {
      testField: 'defaultData',
    },
    errors: {},
    isAdd: true,
    register: jest.fn(),
  }

  test('renders without crashing', () => {
    render(<InputField {...defaultProps} />)
  })

  test('sets default value correctly when isAdd is true', () => {
    render(<InputField {...defaultProps} />)
    expect(screen.getByPlaceholderText('Test Placeholder')).toHaveValue('')
  })

  test('sets default value correctly when isAdd is false', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      field: { ...defaultProps.field, defaultValue: 'defaultVal' },
    }
    render(<InputField {...props} />)
    expect(screen.getByPlaceholderText('Test Placeholder')).toHaveValue('defaultData')
  })

  test('displays error message when there are validation errors', () => {
    const props = {
      ...defaultProps,
      errors: {
        testField: {
          message: 'Error Message',
        },
      },
    }
    render(<InputField {...props} />)
    expect(screen.getByText('Error Message')).toBeInTheDocument()
  })

  test('hides the field when hidden prop is true', () => {
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, hidden: true },
    }
    const { container } = render(<InputField {...props} />)
    expect(container.firstChild).toHaveStyle('display: none')
  })

  test('displays prefix correctly when hasPrefix is true', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      field: {
        ...defaultProps.field,
        hasPrefix: true,
        prefixKey: 'prefixKey',
      },
      defaultData: {
        ...defaultProps.defaultData,
        prefixKey: 'Prefix: ',
      },
    }
    render(<InputField {...props} />)
    expect(screen.getByText('Prefix: ')).toBeInTheDocument()
  })

  test('formats date correctly when type is date', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      field: { ...defaultProps.field, type: 'date' },
      defaultData: {
        testField: '2023-07-23',
      },
    }
    render(<InputField {...props} />)
    expect(screen.getByPlaceholderText('Test Placeholder')).toHaveValue('2023-07-23')
  })
})

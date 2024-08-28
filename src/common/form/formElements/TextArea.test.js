import React from 'react'
import { render, renderHook, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { TextArea } from './TextArea'
import { useForm } from 'react-hook-form'

// Mock component that uses the TextArea component
const TestComponent = ({ field, isAdd, defaultData, errors }) => {
  const { register } = useForm()
  return (
    <TextArea
      field={field}
      isAdd={isAdd}
      defaultData={defaultData}
      errors={errors}
      register={register}
    />
  )
}

describe('TextArea Component', () => {
  const defaultProps = {
    field: {
      name: 'testTextAreaField',
      placeholder: 'Enter text',
      size: '6',
      hidden: false,
      type: 'text',
    },
    isAdd: true,
    defaultData: {},
    errors: {},
  }

  test('renders without crashing', () => {
    render(<TestComponent {...defaultProps} />)
    expect(screen.getByText('Enter text')).toBeInTheDocument()
  })

  test('hides the field when hidden prop is true', () => {
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, hidden: true },
    }
    const { container } = render(<TestComponent {...props} />)
    expect(container.firstChild).toHaveStyle('display: none')
  })

  test('displays default data when isAdd is false', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      defaultData: { testTextAreaField: 'Default text' },
    }
    render(<TestComponent {...props} />)
    expect(screen.getByText('Default text')).toHaveValue('Default text')
  })

  test('displays error message when there are validation errors when isAdd is true', () => {
    const props = {
      ...defaultProps,
      errors: { testTextAreaField: { message: 'Error message' } },
    }
    render(<TestComponent {...props} />)
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  test('displays error message when there are validation errors', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      errors: { testTextAreaField: { message: 'Error message' } },
    }
    render(<TestComponent {...props} />)
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })

  test('should throw error and return catch block', () => {
    render(<TestComponent />)
    expect(screen.getByText('Error')).toBeInTheDocument()
  })
})

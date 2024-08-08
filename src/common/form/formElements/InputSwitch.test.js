import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputSwitch } from './InputSwitch'
import { useForm } from 'react-hook-form'

// Mock component that uses the InputSwitch component
const TestComponent = ({ field, isAdd, defaultData }) => {
  const { register } = useForm()
  return (
    <InputSwitch
      field={field}
      isAdd={isAdd}
      defaultData={defaultData}
      register={register}
    />
  )
}

describe('InputSwitch Component', () => {
  const defaultProps = {
    field: {
      name: 'testSwitchField',
      placeholder: 'Enable feature',
      size: '6',
      hidden: false,
      defaultValue: false,
    },
    isAdd: true,
    defaultData: {},
  }

  test('renders without crashing', () => {
    render(<TestComponent {...defaultProps} />)
    expect(screen.getByLabelText('Enable feature')).toBeInTheDocument()
  })

  test('hides the field when hidden prop is true', () => {
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, hidden: true },
    }
    const { container } = render(<TestComponent {...props} />)
    expect(container.firstChild).toHaveStyle('display: none')
  })

  test('switch state is handled correctly', () => {
    render(<TestComponent {...defaultProps} />)
    const checkbox = screen.getByLabelText('Enable feature')
    expect(checkbox.checked).toBe(false)
    fireEvent.click(checkbox)
    expect(checkbox.checked).toBe(true)
  })

  test('fnClick function is called when the switch is toggled', () => {
    const mockFnClick = jest.fn()
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, fnClick: mockFnClick },
    }
    render(<TestComponent {...props} />)
    const checkbox = screen.getByLabelText('Enable feature')
    fireEvent.click(checkbox)
    expect(mockFnClick).toHaveBeenCalledWith(true)
  })

  test('fnChange function is called when the switch is changed', () => {
    const mockFnChange = jest.fn()
    const props = {
      ...defaultProps,
      field: { ...defaultProps.field, fnChange: mockFnChange },
    }
    render(<TestComponent {...props} />)
    const checkbox = screen.getByLabelText('Enable feature')
    fireEvent.change(checkbox, { target: { checked: true } })
    expect(mockFnChange).toHaveBeenCalledWith(true)
  })
})

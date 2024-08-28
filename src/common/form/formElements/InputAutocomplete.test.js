import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputAutocomplete } from './inputAutocomplete'

describe('InputAutocomplete Component', () => {
  const field = { name: 'example' }
  const errors = {}
  const register = jest.fn()
  const suggestions = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
  ]

  test('renders input field correctly', () => {
    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveValue('')
  })

  test('filters suggestions based on user input', () => {
    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByTestId('inputAutocomplete')
    fireEvent.change(inputElement, { target: { value: 'a' } })

    expect(screen.getAllByText('Apple')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Banana')[0]).toBeInTheDocument()
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument()
  })

  test('shows no suggestions when input does not match', () => {
    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'z' } })

    expect(screen.getAllByText(/No suggestions/i)[0]).toBeInTheDocument()
  })

  test('selects a suggestion when clicked', () => {
    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'a' } })
    fireEvent.click(screen.getByText('Apple'))

    expect(inputElement).toHaveValue('Apple')
    expect(screen.queryByText('Apple')).not.toBeInTheDocument()
  })

  test('navigates suggestions with keyboard and selects on enter', () => {
    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'a' } })
    
    fireEvent.keyDown(inputElement, { key: 'ArrowDown' })
    fireEvent.keyDown(inputElement, { key: 'ArrowDown' })
    fireEvent.keyDown(inputElement, { key: 'Enter' })

    expect(inputElement).toHaveValue('Banana')
  })

  test('displays error when validation fails', () => {
    const errors = { example: { message: 'This field is required' } }

    render(<InputAutocomplete suggestions={suggestions} field={field} errors={errors} register={register} />)

    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toHaveClass('trtui-is-invalid')
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputSelect } from './InputSelect'
import { useController } from 'react-hook-form'

// Mock useController hook from react-hook-form
jest.mock('react-hook-form', () => ({
  useController: jest.fn(),
}))
 
describe('InputSelect Component', () => {
  const field = {
    name: 'selectField',
    placeholder: 'option',
    size: 6,
    hidden: false,
    isAutocomplete: false,
    optionArrayDependency: true,
    compOptionArrayDependency:[],
    valFromObjOfParentData: false,
    valFromObj: false,
    optionAPIDependencyChild: false,
    optionAPIDependency: false,
  }

  const fieldAutoComplete = {
    name: 'selectField',
    placeholder: 'Search Option',
    size: 6,
    hidden: false,
    isAutocomplete: true,
    optionArrayDependency: true,
    compOptionArrayDependency:[],
    valFromObjOfParentData: false,
    valFromObj: false,
    optionAPIDependencyChild: false,
    optionAPIDependency: true,
    compOptionAPIDependency:[],
  }

  const errors = {}
  const register = jest.fn()
  const control = {}
  const mainData = {}
  const defaultData = {}
  const parentData = {}

  beforeEach(() => {
    useController.mockReturnValue({
      field: {
        value: '',
        onChange: jest.fn(),
      },
    })
  })

  test('renders select input field', () => {
    render(
      <InputSelect
        field={field}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    //userEvent.selectOptions(getByLabelText('<your select label text>'), '<value>');
    expect(screen.getByText(/Select option.../i)).toBeInTheDocument()
  })

  test('renders autocomplete select input field when isAutocomplete is true', () => {
    render(
      <InputSelect
        field={fieldAutoComplete}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    expect(screen.getByText(/Search Option/i)).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('renders hidden field when hidden is true', () => {
    render(
      <InputSelect
        field={{ ...field, hidden: true }}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    expect(screen.queryByText(/Select option.../i)).not.toBeVisible()
  })

  test('displays error message when there is a validation error', () => {
    const errors = {
      selectField: {
        message: 'This field is required',
      }, 
    }

    render(
      <InputSelect
        field={field}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    expect(screen.getByText(/This field is required/i)).toBeInTheDocument()
  })

  test('calls onChange when selecting an option', () => {
    const mockOnChange = jest.fn()

    useController.mockReturnValue({
      field: {
        value: '',
        onChange: mockOnChange,
      },
    })

    render(
      <InputSelect
        field={{...field, compOptionArrayDependency:[{id:1,name:'chocolate'}]}}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: 'chocolate' },
    })

    expect(mockOnChange).toHaveBeenCalledWith('chocolate')
  })

  test('handles errors gracefully', () => {
    useController.mockImplementation(() => {
      throw new Error('Test error')
    })

    render(
      <InputSelect
        field={field}
        errors={errors}
        register={register}
        control={control}
        mainData={mainData}
        defaultData={defaultData}
        parentData={parentData}
      />
    )

    expect(screen.getByText(/Error/i)).toBeInTheDocument()
  })
})

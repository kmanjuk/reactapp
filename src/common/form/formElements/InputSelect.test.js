import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputSelect } from './InputSelect';
import { useForm, Controller } from 'react-hook-form';

jest.mock('react-select', () => ({ options, value, onChange, ...props }) => {
  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    onChange(selectedOption);
  };
  return (
    <select data-testid="react-select" value={value?.value} onChange={handleChange} {...props}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

const defaultProps = {
  field: { name: 'testField', placeholder: 'Select an option', size: 12, isAutocomplete: false },
  errors: {},
  register: jest.fn(),
  control: jest.fn(),
  mainData: {},
  defaultData: {},
  parentData: {},
};

const renderComponent = (props = {}) => {
  const utils = render(
    <InputSelect {...defaultProps} {...props} />
  );
  return { ...utils };
};

describe('InputSelect component', () => {
  test('renders correctly', () => {
    renderComponent();
    expect(screen.getByLabelText(/select an option/i)).toBeInTheDocument();
  });

  test('select dropdown displays options correctly', () => {
    const field = {
      ...defaultProps.field,
      optionArrayDependency: true,
      compOptionArrayDependency: [{ id: '1', name: 'Option 1' }, { id: '2', name: 'Option 2' }],
    };
    renderComponent({ field });
    fireEvent.click(screen.getByRole('combobox'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('select dropdown handles selection correctly', () => {
    const field = {
      ...defaultProps.field,
      optionArrayDependency: true,
      compOptionArrayDependency: [{ id: '1', name: 'Option 1' }, { id: '2', name: 'Option 2' }],
    };
    renderComponent({ field });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
    expect(screen.getByRole('combobox').value).toBe('1');
  });

  test('autocomplete displays suggestions correctly', () => {
    const field = {
      ...defaultProps.field,
      isAutocomplete: true,
      optionArrayDependency: true,
      compOptionArrayDependency: [{ id: '1', name: 'Option 1' }, { id: '2', name: 'Option 2' }],
    };
    renderComponent({ field });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Option' } });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  test('autocomplete handles selection correctly', () => {
    const field = {
      ...defaultProps.field,
      isAutocomplete: true,
      optionArrayDependency: true,
      compOptionArrayDependency: [{ id: '1', name: 'Option 1' }, { id: '2', name: 'Option 2' }],
    };
    renderComponent({ field });
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Option' } });
    fireEvent.click(screen.getByText('Option 1'));
    expect(input.value).toBe('Option 1');
  });

  test('error styling is applied correctly when there are errors', () => {
    const errors = { testField: { message: 'Error message' } };
    renderComponent({ errors });
    expect(screen.getByRole('combobox')).toHaveClass('trtui-is-invalid');
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { InputAutocomplete } from './InputAutocomplete';

describe('InputAutocomplete component', () => {
  const suggestions = [
    { id: '1', name: 'Apple' },
    { id: '2', name: 'Banana' },
    { id: '3', name: 'Cherry' },
  ];
  const defaultProps = {
    suggestions: suggestions,
    field: { name: 'fruit' },
    errors: {},
    register: jest.fn(),
  };

  test('renders correctly', () => {
    render(<InputAutocomplete {...defaultProps} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('typing in the input field filters suggestions correctly', () => {
    render(<InputAutocomplete {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.queryByText('Cherry')).not.toBeInTheDocument();
  });

  test('clicking on a suggestion sets the input value correctly', () => {
    render(<InputAutocomplete {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.click(screen.getByText('Apple'));
    expect(input.value).toBe('Apple');
  });

  test('navigating suggestions with the keyboard works correctly', () => {
    render(<InputAutocomplete {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'a' } });
    fireEvent.keyDown(input, { keyCode: 40 }); // ArrowDown
    fireEvent.keyDown(input, { keyCode: 13 }); // Enter
    expect(input.value).toBe('Apple');
  });

  test('displays "No suggestions" message when there are no matching suggestions', () => {
    render(<InputAutocomplete {...defaultProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'xyz' } });
    expect(screen.getByText("No suggestions, you're on your own!")).toBeInTheDocument();
  });

  test('error styling is applied correctly when there are errors', () => {
    const props = {
      ...defaultProps,
      errors: { fruit: true },
    };
    const { container } = render(<InputAutocomplete {...props} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('trtui-is-invalid');
    expect(container.querySelector('input').style.backgroundImage).toContain('invalid.svg');
  });
});

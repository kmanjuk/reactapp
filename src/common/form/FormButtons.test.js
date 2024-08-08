import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FormButtons } from './FormButtons';

describe('FormButtons component', () => {
  const defaultProps = {
    isViewOnly: false,
    defaultData: { id: 'test-id' },
    confirmDelete: jest.fn(),
    isAdd: true,
    isRowForm: false,
    setOpenFormModal: jest.fn(),
    isUpdate: false,
    createCallMutation: { isLoading: false },
    updateCallMutation: { isLoading: false },
    deleteCallMutation: { isLoading: false },
    formSchema: { id: 'id' },
  };

  test('renders correctly', () => {
    render(<FormButtons {...defaultProps} />);
    expect(screen.getByText('Add')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  test('Add button shows loading state correctly', () => {
    const props = {
      ...defaultProps,
      createCallMutation: { isLoading: true },
    };
    render(<FormButtons {...props} />);
    expect(screen.getByText('Adding...')).toBeInTheDocument();
  });

  test('Update button shows loading state correctly', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      updateCallMutation: { isLoading: true },
    };
    render(<FormButtons {...props} />);
    expect(screen.getByText('Updating...')).toBeInTheDocument();
  });

  test('Delete button shows loading state correctly', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      isUpdate: true,
      deleteCallMutation: { isLoading: true },
    };
    render(<FormButtons {...props} />);
    expect(screen.getByText('Deleting...')).toBeInTheDocument();
  });

  test('Close button works correctly', () => {
    render(<FormButtons {...defaultProps} />);
    fireEvent.click(screen.getByText('Close'));
    expect(defaultProps.setOpenFormModal).toHaveBeenCalledWith(false);
  });

  test('Delete confirmation works correctly', () => {
    const props = {
      ...defaultProps,
      isAdd: false,
      isUpdate: true,
    };
    render(<FormButtons {...props} />);
    fireEvent.click(screen.getByText('Delete'));
    expect(defaultProps.confirmDelete).toHaveBeenCalledWith('test-id');
  });

  test('renders null when isViewOnly is true', () => {
    const props = {
      ...defaultProps,
      isViewOnly: true,
    };
    const { container } = render(<FormButtons {...props} />);
    expect(container).toBeEmptyDOMElement();
  });
});

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { DeleteConfirm } from './DeleteConfirm'

describe('DeleteConfirm Component', () => {
  const defaultProps = {
    setDeleteId: jest.fn(),
    setDeleteConfirm: jest.fn(),
    deleteCallMutation: { isLoading: false },
    onDelete: jest.fn(),
  }

  test('renders without crashing', () => {
    render(<DeleteConfirm {...defaultProps} />)
    expect(screen.getByText('Are you sure ?')).toBeInTheDocument()
    expect(screen.getByText('Are you sure you want to delete this?')).toBeInTheDocument()
  })

  test('cancel button works as expected', () => {
    render(<DeleteConfirm {...defaultProps} />)
    const cancelButton = screen.getByText('Cancel')
    fireEvent.click(cancelButton)
    expect(defaultProps.setDeleteConfirm).toHaveBeenCalledWith(false)
    expect(defaultProps.setDeleteId).toHaveBeenCalledWith(null)
  })

  test('delete button triggers the delete action', () => {
    render(<DeleteConfirm {...defaultProps} />)
    const deleteButton = screen.getByText('Yes, Delete It!')
    fireEvent.click(deleteButton)
    expect(defaultProps.onDelete).toHaveBeenCalled()
  })

  test('displays loading state when deleteCallMutation.isLoading is true', () => {
    const props = {
      ...defaultProps,
      deleteCallMutation: { isLoading: true },
    }
    render(<DeleteConfirm {...props} />)
    const deleteButton = screen.getAllByText('Deleting...')[0]
    expect(deleteButton).toBeInTheDocument()
  })
})

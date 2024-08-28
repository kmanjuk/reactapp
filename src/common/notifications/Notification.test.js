import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Notification } from './Notification'

// Mocking the props passed to Notification
const defaultProps = {
  notification: { id: 1, type: 'success', message: 'Operation successful' },
  px: 15,
  onDismiss: jest.fn(),
}

const defaultPropsInfo = {
  notification: { id: 1, type: 'info', message: 'Operation successful' },
  px: 15,
  onDismiss: jest.fn(),
}

describe('Notification Component', () => {
  test('renders without crashing with given props', () => {
    render(<Notification {...defaultPropsInfo} />)
    expect(screen.getByText('Operation successful')).toBeInTheDocument()
  })

  test('renders info without crashing with given props', () => {
    render(<Notification {...defaultProps} />)
    expect(screen.getByText('Operation successful')).toBeInTheDocument()
  })

  test('dismisses the notification on clicking the close button', () => {
    render(<Notification {...defaultProps} />)
    const closeButton = screen.getByTestId('closeNotification')
    fireEvent.click(closeButton)
    //expect(screen.getByTestId('closeNotification')).not.toBeInTheDocument()
    expect(defaultProps.onDismiss).toHaveBeenCalledWith(defaultProps.notification.id)
  })

  test('auto dismisses the notification after 5 seconds', async () => {
    jest.useFakeTimers()
    render(<Notification {...defaultProps} />)
    
    // Fast-forward 5 seconds
    jest.advanceTimersByTime(5000)

    //expect(screen.getByTestId('closeNotification')).not.toBeInTheDocument()
    expect(defaultProps.onDismiss).toHaveBeenCalledWith(defaultProps.notification.id)
  })
})

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Notifications } from './Notifications'
import { useNotificationStore } from '../../store/notifications'

// Mocking the notification store
jest.mock('../../store/notifications', () => ({
  useNotificationStore: jest.fn(),
}))

describe('Notifications Component', () => {
  const notifications = [
    { id: 1, type: 'success', message: 'First notification' },
    { id: 2, type: 'error', message: 'Second notification' },
  ]

  const dismissNotification = jest.fn()

  beforeEach(() => {
    useNotificationStore.mockReturnValue({
      notifications,
      dismissNotification,
    })
  })

  test('renders notifications correctly', () => {
    render(<Notifications />)
    notifications.forEach((notification) => {
      expect(screen.getByText(notification.message)).toBeInTheDocument()
    })
  })

  test('dismisses a notification on clicking the close button', () => {
    render(<Notifications />)
    const closeButtons = screen.getAllByRole('button', { name: /close/i })
    
    // Dismiss the first notification
    fireEvent.click(closeButtons[0])
    
    expect(dismissNotification).toHaveBeenCalledWith(notifications[0].id)
  })
})

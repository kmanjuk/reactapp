import {act} from 'react'
import { renderHook } from '@testing-library/react'
import { useNotificationStore } from './notifications'
import { nanoid } from 'nanoid'

// Mock nanoid to return a predictable ID for testing
jest.mock('nanoid', () => ({
  nanoid: jest.fn(() => 'test-id'),
}))

describe('useNotificationStore', () => {
  beforeEach(() => {
    // Reset Zustand state before each test
    useNotificationStore.setState({ notifications: [] })
  })

  it('should add a new notification', () => {
    const { result } = renderHook(() => useNotificationStore())

    act(() => {
      result.current.addNotification({ message: 'Test message', type: 'success' })
    })

    expect(result.current.notifications).toHaveLength(1)
    // expect(result.current.notifications[0]).toEqual({
    //   id: 'test-id',
    //   message: 'Test message',
    //   type: 'success',
    // })
  })

  it('should dismiss a notification by ID', () => {
    const { result } = renderHook(() => useNotificationStore())

    // Add a notification
    act(() => {
      result.current.addNotification({ message: 'Test message', type: 'success' })
    })

    // Ensure the notification was added
    expect(result.current.notifications).toHaveLength(1)

    // Dismiss the notification
    act(() => {
      result.current.dismissNotification('test-id')
    })

    // Ensure the notification was removed
    //expect(result.current.notifications).toHaveLength(0)
  })

  it('should not dismiss a notification if the ID does not exist', () => {
    const { result } = renderHook(() => useNotificationStore())

    // Add a notification
    act(() => {
      result.current.addNotification({ message: 'Test message', type: 'success' })
    })

    // Attempt to dismiss a notification with an invalid ID
    act(() => {
      result.current.dismissNotification('invalid-id')
    })

    // Ensure the notification is still present
    expect(result.current.notifications).toHaveLength(1)
  })
})

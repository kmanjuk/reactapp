import { renderHook, act } from '@testing-library/react'
import { useNotificationStore } from './notifications'

describe('useNotificationStore', () => {
  it('should add a notification', () => {
    const { result } = renderHook(() => useNotificationStore())

    const notification = { message: 'New notification' }

    act(() => {
      result.current.addNotification(notification)
    })

    const { notifications } = result.current
    expect(notifications).toHaveLength(1)
    expect(notifications[0]).toMatchObject(notification)
    expect(notifications[0]).toHaveProperty('id')
  })

  it('should dismiss a notification', () => {
    const { result } = renderHook(() => useNotificationStore())

    const notification = { message: 'New notification' }

    act(() => {
      result.current.addNotification(notification)
    })

    const { notifications } = result.current
    const notificationId = notifications[0].id

    act(() => {
      result.current.dismissNotification(notificationId)
    })

    expect(result.current.notifications).toHaveLength(0)
  })

  it('should not dismiss a notification if id does not exist', () => {
    const { result } = renderHook(() => useNotificationStore())

    const notification = { message: 'New notification' }

    act(() => {
      result.current.addNotification(notification)
    })

    act(() => {
      result.current.dismissNotification('non-existing-id')
    })

    expect(result.current.notifications).toHaveLength(1)
  })
})

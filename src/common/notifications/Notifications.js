import React from 'react'
import { useNotificationStore } from '../../store/notifications'
import { Notification } from './Notification'

/**
 * Notifications component renders a list of Notification components.
 *
 * @module common/Notifications
 * @description Notifications component renders a list of Notification components.
 * @returns {JSX.Element} The rendered component.
 */
export const Notifications = () => {
  const { notifications, dismissNotification } = useNotificationStore()
  let px = 0

  return (
    <div style={{ bottom: '4rem' }}>
      {notifications.map((notification) => {
        px = px + 60
        return (
          <Notification
            key={notification.id}
            notification={notification}
            onDismiss={dismissNotification}
            notifications={notifications}
            px={px}
          />
        )
      })}
    </div>
  )
}

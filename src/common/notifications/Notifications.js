import React from 'react'

import { useNotificationStore } from '../../store/notifications'
import { Notification } from './Notification'

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

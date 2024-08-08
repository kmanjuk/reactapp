import { nanoid } from 'nanoid'
import { create } from 'zustand'

/**
 * @module store/notifications
 * @author Thulisha Reddy Technologies
 * @typedef {Object} Notification
 * @property {string} id - Unique identifier for the notification.
 * @property {string} message - The message content of the notification.
 * @property {string} [type] - Optional type of the notification (e.g., 'success', 'error').
 */

/**
 * @typedef {Object} NotificationState
 * @property {Notification[]} notifications - Array of notifications.
 * @property {function(Notification): void} addNotification - Adds a new notification to the store.
 * @property {function(string): void} dismissNotification - Removes a notification from the store by ID.
 */

/**
 * Zustand store for managing notifications.
 *
 * @type {import('zustand').StoreApi<NotificationState>}
 */
export const useNotificationStore = create((set) => ({
  notifications: [],
  /**
   * Adds a new notification to the store.
   *
   * @param {Notification} notification - The notification to add.
   */
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, { id: nanoid(), ...notification }],
    })),
  /**
   * Removes a notification from the store by its ID.
   *
   * @param {string} id - The ID of the notification to remove.
   */
  dismissNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((notification) => notification.id !== id),
    })),
}))

import React from 'react'
import PropTypes from 'prop-types'

/**
 * Notification component displays a notification message.
 *
 * @module common/Notification
 * @description Notification component displays a notification message.
 * @param {Object} props - Component props.
 * @param {Object} props.notification - Notification details.
 * @param {string} props.notification.id - Unique identifier for the notification.
 * @param {string} props.notification.type - Type of the notification (e.g., 'success', 'error', 'info').
 * @param {string} props.notification.message - Message to display in the notification.
 * @param {number} props.px - Distance from the bottom of the screen in pixels.
 * @param {Function} props.onDismiss - Function to call when the notification is dismissed.
 *
 * @returns {JSX.Element} The rendered component.
 */
export const Notification = ({ notification: { id, type, message }, px, onDismiss }) => {
  const [openMessage, setOpenMessage] = React.useState({ 1: true })

  /**
   * Close the notification and call the onDismiss function.
   */
  const closeMessage = () => {
    onDismiss(id)
    setOpenMessage(false)
  }

  React.useEffect(() => {
    let timer1 = setTimeout(() => closeMessage(), 5 * 1000)
    return () => {
      clearTimeout(timer1)
    }
  }, [])

  return (
    <div
      className={`trtui-toastify trtui-bg-${
        type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info'
      } trtui-toastify-right trtui-toastify-bottom`}
      aria-live="polite"
      style={{
        opacity: 1,
        webkitTransform: 'translate(0px, 0px)',
        msTransform: 'translate(0px, 0px)',
        transform: 'translate(0px, 0px)',
        bottom: `${px}px`, //"15px",
        display: openMessage ? 'block' : 'none',
      }}
    >
      {message}
      <button
        type="button"
        aria-label="Close"
        onClick={() => setOpenMessage(false)}
        className="trtui-toast-close"
        data-testid="closeNotification"
      >
        ✖
      </button>
    </div>
  )
}

Notification.propTypes = {
  /** Notification details */
  notification: PropTypes.shape({
    /** Unique identifier for the notification */
    id: PropTypes.string.isRequired,
    /** Type of the notification (e.g., 'success', 'error', 'info') */
    type: PropTypes.string.isRequired,
    /** Message to display in the notification */
    message: PropTypes.string.isRequired,
  }).isRequired,
  /** Distance from the bottom of the screen in pixels */
  px: PropTypes.number.isRequired,
  /** Function to call when the notification is dismissed */
  onDismiss: PropTypes.func.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Notification = ({ notification: { id, type, message }, px, onDismiss }) => {
  const [openMessage, setOpenMessage] = React.useState({ 1: true })
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
      >
        ✖
      </button>
    </div>
  )
}

Notification.propTypes = {
  notification: PropTypes.object.isRequired,
  px: PropTypes.number.isRequired,
  onDismiss: PropTypes.func.isRequired,
}

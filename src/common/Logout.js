import React from 'react'
import PropTypes from 'prop-types'
import { useAuthStore } from '../store/auth'

export const Logout = ({ isLocalEnvironment }) => {
  const { unsetAuthentication } = useAuthStore()
  React.useEffect(() => {
    const redirectURL = window.location.origin
    unsetAuthentication()
    localStorage.removeItem('authenticateSession')
    localStorage.removeItem('auth')
    localStorage.removeItem('loggedIn')

    window.open(isLocalEnvironment + '/auth/logout?url=' + redirectURL, '_self')
  })
}

Logout.propTypes = {
  isLocalEnvironment: PropTypes.string.isRequired,
}

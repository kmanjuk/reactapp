import React from 'react'
import PropTypes from 'prop-types'

export const Logout = ({ isLocalEnvironment }) => {
  React.useEffect(() => {
    const redirectURL = window.location.origin
    localStorage.removeItem('authenticateSession')
    localStorage.removeItem('auth')
    localStorage.removeItem('loggedIn')

    window.open(isLocalEnvironment + '/auth/logout?url=' + redirectURL, '_self')
  })

  return (
    <div className="trtui-auth-page-wrapper trtui-pb-5 trtui-d-flex trtui-justify-content-center trtui-align-items-center trtui-min-vh-100">
      <div className="trtui-auth-page-content trtui-overflow-hidden trtui-p-0">
        <div className="trtui-container-fluid">
          <div className="trtui-row trtui-justify-content-center">
            <div className="trtui-col-xl-4 trtui-text-center">
              <div className="trtui-error-500 trtui-position-relative">
                <h1 className="trtui-title trtui-text-muted">&nbsp;</h1>
              </div>
              <div>
                <h4>Please wait logging out....</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Logout.propTypes = {
  isLocalEnvironment: PropTypes.string.isRequired,
}

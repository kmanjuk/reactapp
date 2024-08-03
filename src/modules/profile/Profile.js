import React from 'react'
import PropTypes from 'prop-types'

import { ProfileBG } from './ProfileBG'
import { ProfileRoles } from './ProfileRoles'
import { ProfileImage } from './ProfileImage'
import { ProfileUpdate } from './ProfileUpdate'

export const Profile = ({ authDetails, routeData, isLocalEnvironment, envData }) => {
  return (
    <>
      <ProfileBG />
      <div className="trtui-row">
        <div className="trtui-col-xxl-3">
          <ProfileImage authDetails={authDetails} />
          <ProfileRoles authDetails={authDetails} />
        </div>
        <div className="trtui-col-xxl-9">
          <ProfileUpdate
            authDetails={authDetails}
            moduleSchema={routeData.apiEndPointSchema}
            isLocalEnvironment={isLocalEnvironment}
            envData={envData}
          />
        </div>
      </div>
    </>
  )
}

Profile.propTypes = {
  authDetails: PropTypes.object.isRequired,
  routeData: PropTypes.object.isRequired,
  isLocalEnvironment: PropTypes.string.isRequired,
  envData: PropTypes.object.isRequired,
}

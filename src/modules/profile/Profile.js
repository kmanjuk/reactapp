import React from 'react'
import PropTypes from 'prop-types'

import { ProfileBG } from './ProfileBG'
import { ProfileRoles } from './ProfileRoles'
import { ProfileImage } from './ProfileImage'
import { ProfileUpdate } from './ProfileUpdate'
import { Settings } from '../settings/Settings'

/**
 * Profile component renders the user's profile page, including background, image, roles, and update section.
 *
 * @module profile/Profile
 * @description Profile component renders the user's profile page, including background, image, roles, and update section.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - Component props.
 * @param {Object} props.authDetails - Authentication details of the user.
 * @param {Object} props.routeData - Data related to the current route, including API endpoint schema.
 * @param {boolean} props.isLocalEnvironment - A flag indicating if the environment is local.
 * @param {Object} props.envData - An object containing environment data.
 * @returns {JSX.Element} The rendered component.
 */
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
        <Settings />
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

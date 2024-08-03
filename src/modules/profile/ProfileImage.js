import React from 'react'
import PropTypes from 'prop-types'

import defaultAvatar from '../../assets/images/default-avatar.png'

export const ProfileImage = ({ authDetails }) => {
  return (
    <div className="trtui-card trtui-mt-n5">
      <div className="trtui-card-body trtui-p-4">
        <div className="trtui-text-center">
          <div className="trtui-profile-user position-relative trtui-d-inline-block trtui-mx-auto trtui-mb-4">
            <img
              src={
                (authDetails.authentication.profileImg !== null
                  ? authDetails.authentication.profileImg
                  : defaultAvatar) || defaultAvatar
              }
              className="trtui-rounded-circle trtui-avatar-xl trtui-img-thumbnail trtui-user-profile-image"
              alt="user-profile-pic"
            />
          </div>
          <h5 className="trtui-fs-16 trtui-mb-1">{authDetails?.session?.user.userFullName}</h5>
          <p className="trtui-text-muted trtui-mb-0">{authDetails?.session?.user.email}</p>
        </div>
      </div>
    </div>
  )
}

ProfileImage.propTypes = {
  authDetails: PropTypes.object.isRequired,
}

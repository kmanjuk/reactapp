import React from 'react'

import profileBg from '../../assets/images/profile-bg.jpg'

export const ProfileBG = () => {
  return (
    <div className="trtui-position-relative trtui-mx-n4 trtui-mt-n4">
      <div className="trtui-profile-wid-bg trtui-profile-setting-img">
        <img src={profileBg} className="trtui-profile-wid-img" alt="profile cover" />
      </div>
    </div>
  )
}

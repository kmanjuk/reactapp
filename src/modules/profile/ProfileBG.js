import React from 'react'

import profileBg from '../../assets/images/profile-bg.jpg'

/**
 * ProfileBG component renders the background image for the user's profile page.
 *
 * @module profile/ProfileBG
 * @description ProfileBG component renders the background image for the user's profile page.
 * @author Thulisha Reddy Technologies
 * @returns {JSX.Element} The rendered component with the profile background image.
 */
export const ProfileBG = () => {
  return (
    <div className="trtui-position-relative trtui-mx-n4 trtui-mt-n4">
      <div className="trtui-profile-wid-bg trtui-profile-setting-img">
        <img src={profileBg} className="trtui-profile-wid-img" alt="profile cover" />
      </div>
    </div>
  )
}

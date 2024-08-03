import React from 'react'
import PropTypes from 'prop-types'

export const ProfileRoles = ({ authDetails }) => {
  const [roleExpand, setRoleExpand] = React.useState(false)
  return (
    <div className="trtui-card">
      <div className="trtui-card-body">
        <div className="trtui-d-flex trtui-align-items-center trtui-mb-4">
          <div className="trtui-flex-grow-1">
            <h5 className="trtui-card-title trtui-mb-0">Roles</h5>
          </div>
          <div className="trtui-flex-shrink-0">
            <span
              className="trtui-cursor-pointer"
              role="button"
              id="dropdownMenuLink2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setRoleExpand(!roleExpand)}
            >
              <i className="ri-arrow-down-s-line trtui-fs-14"></i>
            </span>
          </div>
        </div>
        <div
          style={{
            display: roleExpand ? 'block' : 'none',
            animationName: 'DropDownSlide',
            animationDuration: '.3s',
            animationFillMode: 'both',
          }}
        >
          {authDetails?.session?.user?.userRoles?.length &&
            authDetails?.session?.user?.userRoles.length > 0 &&
            authDetails?.session?.user?.userRoles
              .sort((a, b) => a.roleName - b.roleName)
              .map((role, roleIndex) => (
                <div key={roleIndex} className="trtui-d-flex trtui-align-items-center trtui-py-3">
                  <div className="trtui-avatar-xs trtui-flex-shrink-0 trtui-me-3 trtui-pt-1">
                    <i className="bx bx-user-pin trtui-fs-22" />
                  </div>
                  <div className="trtui-flex-grow-1">
                    <div>
                      <h5 className="trtui-fs-14 trtui-mb-1">{role.roleName}</h5>
                    </div>
                  </div>
                  <div className="trtui-flex-shrink-0 trtui-ms-2">
                    <button
                      type="button"
                      className="trtui-btn trtui-btn-sm trtui-btn-outline-success"
                    >
                      <i className="ri-user-add-line trtui-align-middle" />
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  )
}

ProfileRoles.propTypes = {
  authDetails: PropTypes.object.isRequired,
}

import React from 'react'
import { Link } from 'react-router-dom'

export const AppLayoutError = () => {
  return (
    <div className="trtui-row trtui-mt-5 trtui-justify-content-center">
      <div className=" trtui-mt-5 trtui-col-10">
        <div className="trtui-card trtui-mt-5">
          <div className="trtui-card-body trtui-p-4">
            <div className="trtui-mb-4">
              <div className="trtui-avatar-lg trtui-mx-auto">
                <div className="trtui-avatar-title trtui-bg-light trtui-text-danger trtui-display-5 trtui-rounded-circle">
                  <i className="ri-close-line" />
                </div>
              </div>
            </div>
            <div className="trtui-p-2 trtui-mt-4">
              <div className="trtui-text-muted trtui-text-center trtui-mb-4 trtui-mx-lg-3">
                <h4>An Error Occured!</h4>
                <p>Something went wrong and an error occured!</p>
              </div>

              <div className="trtui-mt-3 trtui-text-center">
                <Link to="/" className="trtui-btn trtui-btn-primary trtui-btn-label">
                  <i className="ri-home-line trtui-label-icon trtui-align-middle trtui-fs-16 trtui-me-2" />{' '}
                  Home
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/console/my-profile" className="trtui-btn trtui-btn-info trtui-btn-label">
                  <i className="ri-user-line trtui-label-icon trtui-align-middle trtui-fs-16 trtui-me-2" />{' '}
                  My Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

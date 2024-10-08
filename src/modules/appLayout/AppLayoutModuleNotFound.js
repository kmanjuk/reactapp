import React from 'react'

import { Link } from 'react-router-dom'

/**
 * AppLayoutModuleNotFound component renders a message indicating that the requested module was not found.
 *
 * This component displays a card with a message and two buttons that allow the user to navigate back home or to their profile.
 *
 * @module appLayout/AppLayoutModuleNotFound
 * @description AppLayoutModuleNotFound component renders a message indicating that the requested module was not found.
 * @example
 * return (
 *   <AppLayoutModuleNotFound />
 * )
 * Functional React component for rendering the "Module Not Found" message.
 * @returns {JSX.Element} The rendered component.
 */

export const AppLayoutModuleNotFound = () => {
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
                <h4>Sorry, Module not Found</h4>
                <p>The module you are looking for is not available!</p>
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

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const AppLayoutMenubar = ({ toggleMenu, sideMenuRef, envData }) => {
  return (
    <div className="trtui-app-menu trtui-navbar-menu" style={{ marginLeft: toggleMenu ? 0 : '' }}>
      <div
        className="trtui-navbar-brand-box trtui-d-block"
        style={{ borderBottom: '1px solid var(--vz-header-border)' }}
      >
        <Link
          to="/"
          className="trtui-logo trtui-logo-dark"
          style={{ lineHeight: toggleMenu ? '60px' : '70px' }}
        >
          <span className="trtui-logo-lg trtui-d-block">
            <img src={envData.REACT_APP_THEME_LOGO} alt="logo-lg-dark" />
          </span>
        </Link>
        <Link
          to="/"
          className="trtui-logo trtui-logo-light"
          style={{ lineHeight: toggleMenu ? '60px' : '70px' }}
        >
          <span className="trtui-logo-lg trtui-d-block">
            <img src={envData.REACT_APP_THEME_LOGO} alt="logo-lg-light" />
          </span>
        </Link>
        <button
          type="button"
          className="trtui-btn trtui-btn-sm trtui-p-0 trtui-fs-20 trtui-header-item trtui-float-end trtui-btn-vertical-sm-hover"
          id="vertical-hover"
        >
          <i className="ri-record-circle-line" />
        </button>
      </div>
      <div
        data-simplebar="init"
        className="trtui-h-100 trtui-simplebar-scrollable-y"
        ref={sideMenuRef}
      >
        <div className="trtui-simplebar-wrapper">
          <div className="trtui-simplebar-height-auto-observer-wrapper">
            <div className="trtui-simplebar-height-auto-observer"></div>
          </div>
          <div className="trtui-simplebar-mask">
            <div className="trtui-simplebar-offset">
              <div className="trtui-simplebar-content-wrapper">
                <div className="trtui-simplebar-content">
                  <div
                    className="trtui-container-fluid cScrollBar"
                    style={{ maxHeight: '100vh', paddingBottom: '8rem' }}
                  >
                    <div id="two-column-menu" />
                    <ul className="trtui-navbar-nav" data-simplebar="init" id="navbar-nav">
                      {/* {Object.keys(userMenuGrouped)
                        .sort((a, b) => a.localeCompare(b))
                        .map((grp, grpInd) => (
                          <React.Fragment key={grpInd}>
                            <li className="trtui-menu-title">
                              <span data-key="t-menu">{grp}</span>
                            </li>
                            {userMenuGrouped[grp]
                              .sort((a, b) =>
                                a["pageTitle"].localeCompare(b["pageTitle"])
                            )
                            .map((menu, menuIndex) => (
                              <React.Fragment key={menuIndex}>
                              {!menu.apiEndPointSchema.noMenu &&
                                <MenuItem
                                  key={menuIndex}
                                  setToggleMenu={setToggleMenu}
                                  menuItem={menu}
                                  urlLink={urlLink[1]}
                                  />}
                                  </React.Fragment>  
                              ))}
                          </React.Fragment>
                        ))} */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trtui-sidebar-background" />
    </div>
  )
}

AppLayoutMenubar.propTypes = {
  envData: PropTypes.object.isRequired,
  toggleMenu: PropTypes.bool.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  sideMenuRef: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useOnClickOutside } from '../../lib/OnClickOutside'
import { isValidJsonString } from '../../lib/uiHelper'
import defaultAvatar from '../../assets/images/default-avatar.png'

export const AppLayoutHeader = ({
  envData,
  authDetails,
  setToggleLoginModal,
  setToggleMenu,
  toggleMenu,
}) => {
  const isLoggedIn = isValidJsonString(authDetails)
    ? authDetails.loggedIn
    : JSON.parse(JSON.stringify(authDetails)).loggedIn || false
  const authSession = isValidJsonString(authDetails)
    ? authDetails
    : JSON.parse(JSON.stringify(authDetails))
  const usersRoles = authDetails.session?.data?.formData?.user?.userRoles
  const [userDropDown, setUserDropDown] = React.useState(false)
  const userDropDownRef = React.useRef()
  useOnClickOutside(userDropDownRef, () => setUserDropDown(false))
  const [userRoles, setUserRoles] = React.useState(false)
  const userRolesRef = React.useRef()
  useOnClickOutside(userRolesRef, () => setUserRoles(false))

  const layoutElem = document.getElementsByTagName('html')
  const [hamburger, setHamburger] = React.useState(false)

  const defaultThemeLayout = localStorage.getItem('themeLayout')

  const [isDark, setIsDark] = React.useState(defaultThemeLayout || false)

  const themeLayout = (layout) => {
    //setAttribute("data-layout", layout);
    const htmElem = document.getElementsByTagName('html')
    if (layout === true) {
      localStorage.setItem('themeLayout', layout)
      htmElem[0].setAttribute('data-sidebar', 'dark')
      htmElem[0].setAttribute('data-bs-theme', 'dark')
    } else {
      localStorage.removeItem('themeLayout')
      htmElem[0].setAttribute('data-sidebar', 'light')
      htmElem[0].setAttribute('data-bs-theme', 'light')
    }
    setIsDark(layout)
  }

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      const logoId = document.getElementById('brandLogo')
      logoId.style.display = 'block'
    }

    if (localStorage.getItem('themeLayout') && localStorage.getItem('themeLayout') === 'true') {
      const htmElem = document.getElementsByTagName('html')
      htmElem[0].setAttribute('data-sidebar', 'dark')
      htmElem[0].setAttribute('data-bs-theme', 'dark')
    }
  }, [])
  if (window.attachEvent) {
    window.attachEvent('onresize', function () {
      if (window.innerWidth < 768) {
        const logoId = document.getElementById('brandLogo')
        logoId.style.display = 'block'
      } else {
        const logoId = document.getElementById('brandLogo')
        logoId.style.display = 'none'
      }
    })
  } else if (window.addEventListener) {
    window.addEventListener(
      'resize',
      function () {
        if (window.innerWidth < 768) {
          const logoId = document.getElementById('brandLogo')
          logoId.style.display = 'block'
        } else {
          const logoId = document.getElementById('brandLogo')
          logoId.style.display = 'none'
        }
      },
      true,
    )
  }

  const minSideMenu = () => {
    if (window.innerWidth < 768) {
      document.body.classList.add('vertical-sidebar-enable')
      document.body.classList.remove('twocolumn-panel')
      setToggleMenu(!toggleMenu)
    } else {
      if (!hamburger) {
        layoutElem[0].setAttribute('data-sidebar-size', 'sm')
      } else {
        layoutElem[0].setAttribute('data-sidebar-size', 'lg')
      }
    }
    setHamburger(!hamburger)
  }

  const invalidateCache = () => {}

  return (
    <header id="page-topbar">
      <div className="trtui-layout-width">
        <div className="trtui-navbar-header">
          <div className="trtui-d-flex">
            {/* LOGO */}
            <div className="trtui-navbar-brand-box trtui-horizontal-logo" id="brandLogo">
              <Link to="/" className="trtui-logo trtui-logo-dark">
                <span className="trtui-logo-sm">
                  <img
                    src={envData.REACT_APP_THEME_FAVICON}
                    style={{ maxWidth: '36px', maxHeight: '36px' }}
                    alt="logo-sm-dark"
                  />
                </span>
                <span className="trtui-logo-lg">
                  <img src={envData.REACT_APP_THEME_LOGO} alt="logo-lg-dark" />
                </span>
              </Link>
              <Link to="/" className="trtui-logo trtui-logo-light">
                <span className="trtui-logo-sm">
                  <img
                    src={envData.REACT_APP_THEME_FAVICON}
                    style={{ maxWidth: '36px', maxHeight: '36px' }}
                    alt="logo-sm-light"
                  />
                </span>
                <span className="trtui-logo-lg">
                  <img src={envData.REACT_APP_THEME_LOGO} alt="logo-lg-light" />
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="trtui-btn trtui-btn-sm trtui-px-3 trtui-fs-16 trtui-header-item trtui-vertical-menu-btn trtui-topnav-hamburger trtui-d-block trtui-d-md-none"
              onClick={minSideMenu}
            >
              <span className={`trtui-hamburger-icon`}>
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
          <div className="trtui-d-flex trtui-align-items-center">
            <div className="trtui-ms-1 trtui-header-item trtui-d-flex">
              <Link
                to="/"
                className="trtui-btn trtui-btn-icon trtui-btn-topbar trtui-btn-ghost-secondary trtui-rounded-circle"
              >
                <i className={`bx bx-home trtui-fs-22`} />
              </Link>
            </div>
            {isLoggedIn && usersRoles?.length && usersRoles.length > 0 && (
              <div className="trtui-dropdown trtui-topbar-head-dropdown trtui-ms-1 trtui-header-item">
                <button
                  type="button"
                  className={`trtui-btn trtui-btn-icon trtui-btn-topbar trtui-btn-ghost-secondary trtui-rounded-circle ${
                    userRoles && 'trtui-show'
                  }`}
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => setUserRoles(!userRoles)}
                >
                  <i className="bx bx-user-pin trtui-fs-22" />
                </button>
                <div
                  className={`trtui-dropdown-menu trtui-dropdown-menu-lg trtui-p-0 trtui-dropdown-menu-end ${
                    userRoles && 'trtui-show'
                  }`}
                  style={{
                    position: 'absolute',
                    inset: '0px 0px auto auto',
                    margin: '0px',
                    WebkitTransform: 'translate(0px, 58px)',
                    msTransform: 'translate(0px, 58px)',
                    transform: 'translate(0px, 58px)',
                  }}
                  ref={userRolesRef}
                >
                  <div className="trtui-p-3 trtui-border-top-0 trtui-border-start-0 trtui-border-end-0 trtui-border-dashed trtui-border">
                    <div className="trtui-row trtui-align-items-center">
                      <div className="trtui-col">
                        <h6 className="trtui-m-0 trtui-fw-semibold trtui-fs-15">User Roles</h6>
                      </div>
                    </div>
                  </div>
                  <div className="trtui-p-2">
                    <div className="trtui-row trtui-g-0">
                      {usersRoles.map((role, roleIndex) => (
                        <div
                          key={roleIndex}
                          className="trtui-col-4"
                          style={{
                            '--vz-bg-opacity': 1,
                            backgroundColor:
                              authSession.role === role.roleName
                                ? 'rgba(var(--vz-light-rgb),var(--vz-bg-opacity))'
                                : '',
                            cursor: 'pointer',
                          }}
                          onClick={() => {
                            invalidateCache(role.roleName, role.roleId)
                          }}
                        >
                          <span className="trtui-dropdown-icon-item" href="#!">
                            <img src={defaultAvatar} alt="bitbucket" />
                            <span>{role.roleName}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="trtui-ms-1 trtui-header-item trtui-d-flex">
              <button
                type="button"
                onClick={() => themeLayout(!isDark)}
                className="trtui-btn trtui-btn-icon trtui-btn-topbar trtui-btn-ghost-secondary trtui-rounded-circle trtui-light-dark-mode"
              >
                <i className={`bx bx-${isDark ? 'sun' : 'moon'} trtui-fs-22`} />
              </button>
            </div>
            <div className="trtui-dropdown trtui-ms-sm-3 trtui-header-item trtui-topbar-user">
              {!isLoggedIn ? (
                <button
                  type="button"
                  className={`trtui-btn trtui-btn-icon trtui-btn-topbar trtui-btn-ghost-secondary ${
                    usersRoles && 'trtui-show'
                  } trtui-ml-1 trtui-m2-1`}
                  onClick={() => setToggleLoginModal(true)}
                >
                  <i className="bx bx-user trtui-fs-22" />
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className={`trtui-btn ${userDropDown && 'trtui-show'}`}
                    onClick={() => setUserDropDown(!userDropDown)}
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                  >
                    <span className="trtui-d-flex trtui-align-items-center">
                      <img
                        className="trtui-rounded-circle trtui-header-profile-user"
                        src={
                          authSession.authentication.user.profile.photos[0].value || defaultAvatar
                        }
                        alt="Header Avatar"
                      />
                      <span className="trtui-text-start trtui-ms-xl-2">
                        <span className="trtui-d-none trtui-d-xl-inline-block trtui-ms-1 trtui-fw-semibold trtui-user-name-text">
                          {authSession?.session?.data?.formData?.user?.userFullName}
                        </span>
                        <span className="trtui-d-none trtui-d-xl-block trtui-ms-1 trtui-fs-12 trtui-user-name-sub-text">
                          {authSession?.role}
                        </span>
                      </span>
                    </span>
                  </button>
                  <div
                    className={`trtui-dropdown-menu trtui-dropdown-menu-end ${
                      userDropDown && 'trtui-show'
                    }`}
                    style={{
                      position: 'absolute',
                      inset: '0px 0px auto auto',
                      margin: '0px',
                      WebkitTransform: 'translate(0px, 62px)',
                      msTransform: 'translate(0px, 62px)',
                      transform: 'translate(0px, 62px)',
                    }}
                    ref={userDropDownRef}
                  >
                    <h6 className="trtui-dropdown-header">
                      Welcome {authSession?.session?.data?.formData?.user.userFullName}!
                    </h6>
                    <Link className="trtui-dropdown-item" to="/console/my-profile">
                      <i className="mdi mdi-account-circle trtui-text-muted trtui-fs-16 trtui-align-middle trtui-me-1" />
                      <span className="trtui-align-middle">Profile</span>
                    </Link>
                    <Link className="trtui-dropdown-item" to="/console/my-messages">
                      <i className="mdi mdi-message-text-outline trtui-text-muted trtui-fs-16 trtui-align-middle trtui-me-1" />
                      <span className="trtui-align-middle">Messages</span>
                    </Link>
                    <Link className="trtui-dropdown-item" to="help">
                      <i className="mdi mdi-lifebuoy trtui-text-muted trtui-fs-16 trtui-align-middle trtui-me-1" />
                      <span className="trtui-align-middle">Help</span>
                    </Link>
                    <div className="trtui-dropdown-divider" />
                    <Link className="trtui-dropdown-item" to="/console/logout">
                      <i className="mdi mdi-logout trtui-text-muted trtui-fs-16 trtui-align-middle trtui-me-1" />
                      <span className="trtui-align-middle" data-key="t-logout">
                        Logout
                      </span>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

AppLayoutHeader.propTypes = {
  envData: PropTypes.object.isRequired,
  setToggleLoginModal: PropTypes.func.isRequired,
  authDetails: PropTypes.object.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.bool.isRequired,
}

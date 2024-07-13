import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { gapi, loadAuth2 } from 'gapi-script'
import { default as dayjs } from 'dayjs'

import { useOnClickOutside } from '../../../../lib/utils/OnClickOutside'
import userRoles from '../../../../assets/images/users-svg.svg'
import profile from '../../../../assets/images/profile.svg'
import home from '../../../../assets/images/home.svg'
import logout from '../../../../assets/images/logout.svg'
import menu from '../../../../assets/images/menu.svg'
import avatar from '../../../../assets/images/avatar.png'
//import { Navbar } from './Navbar'

export const NavbarDefault = (props) => {
  const { authData } = props
  const [dropdownMenu, setDropdownMenu] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(0)
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(async () => {
    resizeWindow()
    window.addEventListener('resize', resizeWindow)
    return () => window.removeEventListener('resize', resizeWindow)
  }, [])

  const [profileDropdown, setProfileDropdown] = React.useState(false)

  const userDropDownOnClick = React.useRef()
  useOnClickOutside(userDropDownOnClick, () => setProfileDropdown(false))

  const getUserImg = (img) => {
    if (img === null) {
      return avatar
    } else {
      return img
    }
  }

  const userLogout = () => {
    const isLocalEnvironment =
      process.env.REACT_APP_USE_API_URL_LOCAL === '1' ? '' : process.env.REACT_APP_API_URL_LOCAL
    const redirectURL = window.location.origin
    localStorage.removeItem('authenticateSession')
    localStorage.removeItem('authent')
    localStorage.removeItem('loggedIn')
    props.auth.setUser(null)
    props.auth.unsetAuthentication()
    window.open(isLocalEnvironment + '/auth/logout?url=' + redirectURL, '_self')
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light sleep awake scrolled "
        id="ftco-navbar"
        style={{ background: '#e3f2fd !important' }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={props.appVariables.REACT_APP_THEME_LOGO}
              className={`header-brand-img light-logo1 ${windowWidth <= 992 && 'mt-2'}`}
              alt="logo"
              style={{ height: '70%', width: '70%' }}
            />
          </Link>

          {props.authData?.isLoggedIn && (
            <img
              src={getUserImg(props.authData?.authentication?.profileImg)}
              referrerPolicy="no-referrer"
              alt="user"
              style={{ width: '1.7rem', height: '1.7rem' }}
              className={`img-responsive rounded-circle dropdown-toggle ms-auto d-lg-none`}
            />
          )}

          {!props.authData?.isLoggedIn && (
            <img
              src={profile}
              className="cursor_Pointer"
              alt="User Roles"
              title="User Roles"
              style={{ width: '1.2rem', height: '1.2rem' }}
              onClick={() => props.auth.setAuthModal(true)}
            />
          )}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          >
            <span className="ti-menu" />
          </button>

          <div className={`collapse navbar-collapse ${dropdownMenu ? 'show' : ''}`} id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mt-2">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {windowWidth >= 992 && (
                <>
                  {props.authData?.isLoggedIn ? (
                    <>
                      <li className="nav-item d-none d-lg-block">
                        <a
                          href="#!"
                          className="nav-link mt-2"
                          onClick={() => props.setOpenMenu(!props.openMenu)}
                        >
                          <i className="fa fa-bars" style={{ fontSize: '1.3rem' }} />
                        </a>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className={`nav-link dropdown-toggle ${profileDropdown ? 'show' : ''}`}
                          href="#!"
                          id="h6-dropdown"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                          onClick={() => setProfileDropdown(!profileDropdown)}
                        >
                          <img
                            src={getUserImg(props.authData?.authentication?.profileImg)}
                            referrerPolicy="no-referrer"
                            alt="user"
                            style={{ width: '1.7rem', height: '1.7rem' }}
                            className={`img-responsive rounded-circle dropdown-toggle`}
                          />
                        </a>
                        <ul
                          className={`b-none dropdown-menu font-14 animated fadeInUp ${
                            profileDropdown ? 'show' : ''
                          }`}
                          data-bs-popper="none"
                          ref={userDropDownOnClick}
                        >
                          <li>
                            <Link className="dropdown-item" to="console/my-profile">
                              My Profile
                            </Link>
                          </li>
                          <li className="divider" role="separator" />
                          <li>
                            <a className="dropdown-item" href="#!" onClick={userLogout}>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </li>
                      {props.authsSession?.session?.user.userRoles.length > 1 && (
                        <li className="nav-item">
                          <a
                            href="#!"
                            className="nav-link"
                            onClick={() => props.setRoleModal(true)}
                          >
                            <img
                              src={userRoles}
                              alt="User Roles"
                              title="User Roles"
                              style={{ width: '1.7rem', height: '1.7rem' }}
                            />
                          </a>
                        </li>
                      )}
                    </>
                  ) : null}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {props.authData?.isLoggedIn && (
        <div
          className="custfooter fixed-bottom d-lg-none b-t"
          style={{
            backgroundColor: '#FFFFFF',
            paddingTop: '12px !important',
            boxShadow: '0 -10px 10px -10px rgba(0,0,0,.1)',
          }}
        >
          <div className="row">
            <div className="col">
              <Link to="/">
                <img
                  src={home}
                  className="cursor_Pointer"
                  alt="User Roles"
                  title="User Roles"
                  style={{ width: '1.7rem', height: '1.7rem' }}
                />
              </Link>
            </div>
            <div className="col">
              <span className="cursor_Pointer" onClick={() => props.setOpenMenu(!props.openMenu)}>
                <img
                  src={menu}
                  className="cursor_Pointer"
                  alt="User Roles"
                  title="User Roles"
                  style={{ width: '1.7rem', height: '1.7rem' }}
                />
              </span>
            </div>
            <div className="col">
              <Link to="/console/my-profile">
                <img
                  src={profile}
                  className="cursor_Pointer"
                  alt="User Roles"
                  title="User Roles"
                  style={{ width: '1.7rem', height: '1.7rem' }}
                />
              </Link>
            </div>
            {props.authsSession?.session?.user.userRoles.length > 1 && (
              <div className="col">
                <img
                  src={userRoles}
                  className="cursor_Pointer"
                  alt="User Roles"
                  title="User Roles"
                  style={{ width: '1.7rem', height: '1.7rem' }}
                  onClick={() => props.setRoleModal(true)}
                />
              </div>
            )}
            <div className="col">
              <img
                src={logout}
                className="cursor_Pointer"
                alt="User Roles"
                title="User Roles"
                style={{ width: '1.7rem', height: '1.7rem' }}
                onClick={userLogout}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

NavbarDefault.propTypes = {
  pageData: PropTypes.object.isRequired,
}

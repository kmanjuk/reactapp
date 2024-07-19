import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { T1NavbarChild } from './T1NavbarChild'

/**
 * @module modules/website/webcomps/t1/T1Navbar
 * @description Renders T1Navbar page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Navbar pageData={pageData} />
 */
export const T1Navbar = ({ authSession, setLoginModal, userLogout, pageData }) => {
  /**
   * @callback OpenNavsStateSetter
   * @param {OpenNavsState} state
   * @returns {void}
   */
  const [openNavs, setOpenNavs] = React.useState(false)

  /**
   * @callback WindowWidthStateSetter
   * @param {WindowWidthState} state
   * @returns {void}
   */
  const [windowWidth, setWindowWidth] = React.useState(0)

  /**
   * resizeWindow function sets window width
   * @function resizeWindow
   * @description On scroll window width is captured
   */
  const resizeWindow = () => {
    setWindowWidth(window.scrollY)
  }

  /**
   * On load function captures window size
   * @function useEffect
   * @description Capture window size on load
   * @returns window size
   */
  React.useEffect(() => {
    window.addEventListener('scroll', resizeWindow)
  }, [])

  /**
   * Render T1Navbar page
   * @function T1Navbar
   * @description render T1Navbar page
   * @returns html T1Navbar page is rendered
   */
  return (
    <header className={`t1-header ${windowWidth > 50 ? 't1-sticky' : ''}`}>
      {pageData.content.content.isTopBar && (
        <div className="t1-topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="t1-top-link">
                  {pageData.content.content.topBarLinks.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="t1-top-contact" style={{ listStyleType: 'none' }}>
                  <li>
                    <i className="fa fa-phone" />
                    {pageData.content.content.topBarPhone}
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <a href={`mailto:${pageData.content.content.topBarEmail}`}>
                      {pageData.content.content.topBarEmail}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="t1-header-inner">
        <div className="container">
          <div className="t1-inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12">
                <div className="t1-logo">
                  <Link to="/">
                    <img
                      src={pageData.content.content.logo}
                      alt={pageData.content.content.logoTitle}
                    />
                  </Link>
                </div>
                <div className="t1-mobile-nav">
                  <div className="t1-slicknav_menu">
                    <a
                      href="#!"
                      aria-haspopup="true"
                      role="button"
                      tabIndex={0}
                      className={`t1-slicknav_btn t1-slicknav_${openNavs ? 'collapsed' : 'open'}`}
                      style={{ outline: 'none' }}
                    >
                      <span
                        className="t1-slicknav_menutxt"
                        style={{
                          display: 'block',
                          lineHeight: '1.188em',
                          float: 'left',
                          color: '#fff',
                          fontWeight: '700',
                        }}
                      />
                      <span
                        className="navbtnmobile t1-slicknav_icon t1-slicknav_no-text"
                        onClick={() => setOpenNavs(!openNavs)}
                      >
                        <span className="t1-slicknav_icon-bar" />
                        <span className="t1-slicknav_icon-bar" />
                        <span className="t1-slicknav_icon-bar" />
                      </span>
                    </a>
                    <ul
                      className="t1-slicknav_nav t1-slicknav_hidden"
                      aria-hidden="true"
                      role="menu"
                      style={{
                        display: openNavs ? 'block' : 'none',
                        listStyleType: 'none',
                      }}
                    >
                      {pageData.content.content.navLinks.map((nav, navIndex) =>
                        nav.childItems && nav.childItems.length > 0 ? (
                          <T1NavbarChild nav={nav} navIndex={navIndex} key={navIndex} />
                        ) : (
                          <li key={navIndex} className="pb-2">
                            <Link to={nav.link} role="menuitem">
                              {nav.name}
                            </Link>
                          </li>
                        ),
                      )}
                      {authSession ? (
                        <>
                          <li className="pb-2">
                            <Link to="/console/my-profile" role="menuitem" title="My Profile">
                              - My Profile
                            </Link>
                          </li>
                          <li className="pb-2">
                            <Link
                              to="#!"
                              role="menuitem"
                              title="Logout"
                              onClick={() => userLogout()}
                            >
                              - Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <li>
                          <Link to="#!" title="Login" onClick={() => setLoginModal(true)}>
                            <i style={{ fontSize: '1.5rem' }} className="fa fa-user-o" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-12">
                <div className="t1-main-menu">
                  <nav className="t1-navigation">
                    <ul className="t1-nav t1-menu" style={{ listStyleType: 'none' }}>
                      {pageData.content.content.navLinks.map((nav, navIndex) =>
                        nav.childItems && nav.childItems.length > 0 ? (
                          <li key={navIndex} className="">
                            <Link to={nav.link}>
                              {nav.name} <i className="icofont-rounded-down" />
                            </Link>
                            <ul className="t1-dropdown" style={{ listStyleType: 'none' }}>
                              {nav.childItems.map((cNav, cNavIndex) => (
                                <li key={cNavIndex}>
                                  <Link to={cNav.link}>{cNav.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={navIndex}>
                            <Link to={nav.link}>{nav.name} </Link>
                          </li>
                        ),
                      )}
                      {authSession ? (
                        <li>
                          <Link
                            to="/console/my-profile"
                            title="My Profile"
                            style={{ position: 'relative' }}
                          >
                            <i style={{ fontSize: '1.5rem' }} className="fa fa-user" />
                          </Link>
                          <Link
                            to="#!"
                            title="Logout"
                            style={{ position: 'relative' }}
                            onClick={() => userLogout()}
                          >
                            <i style={{ fontSize: '1.5rem' }} className="fa fa-sign-out" />
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link to="#!" title="Login" onClick={() => setLoginModal(true)}>
                            <i style={{ fontSize: '1.5rem' }} className="fa fa-user-o" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

T1Navbar.propTypes = {
  userLogout: PropTypes.func.isRequired,
  setLoginModal: PropTypes.bool.isRequired,
  pageData: PropTypes.object.isRequired,
  authSession: PropTypes.object.isRequired,
}

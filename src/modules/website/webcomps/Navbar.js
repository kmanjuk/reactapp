import React from 'react'
import PropTypes from 'prop-types'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { E500 } from '../../../components/e500'
import { NavItem } from './NavItem'

export const Navbar = ({
  setTopBarMenu,
  setSideMenu,
  setSideMenuMobile,
  openModal,
  setLoginModal,
  setUserRoles,
  userLogout,
  authSession,
  primaryColor,
  secondaryColor,
  favicon,
}) => {
  document.body.classList.add('horizontal-layout')
  document.body.classList.remove('vertical-layout')
  try {
    return (
      <div className="rightbar" style={{ minHeight: '4.95rem' }}>
        <div className="topbarHo-mobile">
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="mobileHo-logobar">
                <Link to="/" className="mobileHo-logo">
                  <img src={logo} className="img-fluid" alt="logo" />
                </Link>
              </div>
              <div className="mobileHo-togglebarHo">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <div className="topbarHo-toggle-icon">
                      <a className="topbarHo-toggle-hamburger cursor_Pointer" href>
                        <img
                          src={require('../../../assets/images/svg-icon/horizontal.svg').default}
                          id="tbMenuOpen"
                          onClick={() => setTopBarMenu('open')}
                          className="img-fluid menuHo-hamburger-horizontal"
                          alt="horizontal"
                        />
                        <img
                          src={require('../../../assets/images/svg-icon/verticle.svg').default}
                          id="tbMenuClose"
                          onClick={() => setTopBarMenu('close')}
                          className="img-fluid menuHo-hamburger-vertical"
                          alt="verticle"
                        />
                      </a>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="menubarHo">
                      <span className="menuHo-hamburger cursor_Pointer">
                        <img
                          src={require('../../../assets/images/svg-icon/collapse.svg').default}
                          id="mhcollapseLB"
                          onClick={() => setSideMenu('open')}
                          className="img-fluid menuHo-hamburger-collapse"
                          alt="collapse"
                        />
                        <img
                          src={require('../../../assets/images/svg-icon/close.svg').default}
                          id="mhcloseLB"
                          onClick={() => setSideMenu('close')}
                          className="img-fluid menuHo-hamburger-close"
                          alt="close"
                        />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="topbarHo">
          <div className="row align-items-center">
            <div className="col-md-12 align-self-center">
              <div className="togglebarHo">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <div className="logobarHo">
                      <Link to="/" className="logo logo-large">
                        <img
                          src={require('../../../assets/images/logo.png')}
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                    </div>
                  </li>
                  <li className="list-inline-item ml-5">
                    <nav className="horizontal-nav mobile-navbar fixed-navbar">
                      <div className="collapse navbar-collapse active" id="navbar-menu">
                        <ul className="horizontal-menu in">
                          <li className="scroll">
                            <a href="widgets.html">
                              <span>Widgets</span>
                            </a>
                          </li>

                          <NavItem key="menu1" />
                          <NavItem key="menu2" />
                        </ul>
                      </div>
                    </nav>
                  </li>
                  <li className="list-inline-item">
                    <div className="menubarHo">
                      <span className="menuHo-hamburger cursor_Pointer">
                        <img
                          src={require('../../../assets/images/svg-icon/collapse.svg').default}
                          id="mhcollapseLBMobile"
                          onClick={() => setSideMenuMobile('open')}
                          className="img-fluid menuHo-hamburger-collapse"
                          alt="collapse"
                        />
                        <img
                          src={require('../../../assets/images/svg-icon/close.svg').default}
                          id="mhcloseLBMobile"
                          onClick={() => setSideMenuMobile('close')}
                          className="img-fluid menuHo-hamburger-close"
                          alt="close"
                        />
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="infobarHo">
                <ul className="list-inline mb-0">
                  {authSession && (
                    <li className="list-inline-item">
                      <div className="notifybar">
                        <Link to="console/my-profile" className="infobarHo-icon" title="My Profile">
                          <img
                            src={require('../../../assets/images/users/profile.svg').default}
                            className="img-fluid"
                            alt="notifications"
                          />
                        </Link>
                      </div>
                    </li>
                  )}

                  <li className="list-inline-item">
                    {authSession ? (
                      <div className="settingbar">
                        <span
                          id="infobarHo-settings-open"
                          onClick={() => userLogout()}
                          className="infobarHo-icon cursor_Pointer"
                        >
                          <img
                            src={require('../../../assets/images/svg-icon/logout.svg').default}
                            className="img-fluid"
                            alt="settings"
                          />
                        </span>
                      </div>
                    ) : (
                      <div className="settingbar">
                        <span
                          id="infobarHo-settings-open"
                          onClick={() => setLoginModal(true)}
                          className="infobarHo-icon cursor_Pointer"
                        >
                          <img
                            src={require('../../../assets/images/svg-icon/user.svg').default}
                            className="img-fluid"
                            alt="settings"
                          />
                        </span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <E500
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        favicon={favicon}
        error={err}
      />
    )
  }
}

Navbar.propTypes = {
  pageData: PropTypes.object.isRequired,
}

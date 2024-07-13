import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../../../../assets/themes/theme1.css'

export const NavbarT1 = ({
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
  appVariables,
  pageData,
}) => {
  const [openMenu, setOpenMenu] = React.useState(false)
  document.body.className = 'theme1-onetheme-default'
  document.documentElement.style.setProperty('--main-color-primary', primaryColor)

  return (
    <header className="theme1-onetheme-default-header" data-component="Theme1NavDefault">
      <div className="theme1-yit-nav theme1-yit-nav-light-style theme1-yit-on-scroll-nav theme1-fixed-top theme1-img-shadow">
        <nav className="theme1-navbar theme1-navbar-expand-md theme1-fixed-top theme1-navbar-light theme1-bg-none theme1-pt-20 theme1-pb-20 theme1-yit-bsnav-right-menu">
          <div className="theme1-container">
            <Link className="theme1-navbar-brand" to="/">
              <img
                src={pageData.content.content.logo}
                width={214}
                height={47}
                alt={pageData.content.content.logoTitle}
              />
            </Link>
            <button
              className="theme1-navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <i className="fa fa-bars"></i>
            </button>
            <div
              className={`theme1-collapse theme1-navbar-collapse ${
                openMenu === true ? 'theme1-show' : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="theme1-navbar-nav theme1-ml-auto theme1-font-weight-medium theme1-yit-upcase-nav theme1-yit-mega-menu theme1-js-nav-active">
                {pageData.content.content.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className={`theme1-nav-item ${link.isDropDown && 'theme1-dropdown'}`}
                  >
                    <Link
                      to={link.link}
                      className={`theme1-nav-link ${link.isDropDown && 'theme1-dropdown-toggle'}`}
                    >
                      {link.name}
                    </Link>
                    {link.isDropDown && (
                      <div
                        className="theme1-dropdown-menu theme1-yit-radius-none theme1-pt-0 theme1-pb-0"
                        aria-labelledby="navbarDropdown2"
                      >
                        <ul className="theme1-yit-seclevel-menu">
                          {link.dropDown.map((dLink, dLinkIndex) => (
                            <li key={dLinkIndex} className="theme1-nav-item">
                              <Link
                                to={dLink.link}
                                className={`theme1-nav-link ${
                                  dLink.isDropDown && 'theme1-dropdown-toggle'
                                }`}
                              >
                                {dLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
                {authSession ? (
                  <>
                    <li className="theme1-nav-item">
                      <Link
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        title="My Profile"
                        className="theme1-nav-link d-block d-md-none text-muted"
                        to="/console/my-profile"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li className="theme1-nav-item">
                      <a
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        title="Logout"
                        className="theme1-nav-link d-block d-md-none text-muted"
                        href="#!"
                        onClick={() => userLogout()}
                      >
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  <li className="theme1-nav-item">
                    <a
                      data-toggle="modal"
                      data-target="#exampleModalCenter"
                      title="Login"
                      className="theme1-nav-link d-block d-md-none text-muted"
                      href="#!"
                      onClick={() => setLoginModal(true)}
                    >
                      Login
                    </a>
                  </li>
                )}
              </ul>
              {authSession ? (
                <>
                  <Link
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    title="My Profile"
                    className="theme1-search-link"
                    to="/console/my-profile"
                  >
                    <i className="fa fa-user theme1-black-color-text" />
                  </Link>
                  <a
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    title="Logout"
                    className="theme1-search-link"
                    href="#!"
                    onClick={() => userLogout()}
                  >
                    <i className="fa fa-sign-out theme1-black-color-text" />
                  </a>
                </>
              ) : (
                <a
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  title="Login"
                  className="theme1-search-link"
                  href="#!"
                  onClick={() => setLoginModal(true)}
                >
                  <i className="fa fa-user theme1-black-color-text" />
                </a>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

NavbarT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { useOnClickOutside } from '../../../../../lib/OnClickOutside'
import profile from '../../../../../assets/images/default-avatar.png'

export const Navbar1T2 = (props) => {
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

  document.body.style.background = '#FFF'

  return (
    <>
      <nav
        className="theme2-navbar theme2-navbar-expand-lg theme2-ftco_navbar theme2-ftco-navbar-light theme2-sleep theme2-awake theme2-scrolled "
        id="ftco-navbar"
        style={{
          background: '#e3f2fd !important',
          boxShadow: '0 0 10px 0 rgba(0,0,0,.1)',
        }}
      >
        <div className="theme2-container">
          <Link
            className="theme2-navbar-brand"
            to="/"
            // to={props.pageData.content.content.logoLink}
          >
            <img
              src={props.pageData.content.content.logo}
              className={`theme2-header-brand-img theme2-light-logo1 ${
                windowWidth <= 992 && 'theme2-mt-2'
              }`}
              alt="logo"
              style={{ height: '70%', width: '70%' }}
            />
          </Link>

          {/* {props.authSession.session && (
						<img
							src={profile}
							referrerPolicy='no-referrer'
							alt='userP'
							style={{ width: '1.7rem', height: '1.7rem' }}
							className={`theme2-img-responsive theme2-rounded-circle theme2-dropdown-toggle theme2-ms-auto theme2-d-lg-none`}
						/>
					)} */}

          {windowWidth <= 992 && !props.authSession?.session && (
            // <img
            //   src={profile}
            //   className='cursor_Pointer'
            //   alt='User Roles'
            //   title='User Roles'
            //   style={{ width: '1.2rem', height: '1.2rem' }}
            //   onClick={() => props.auth.setAuthModal(true)}
            // />
            // <button
            //   className='btn btn-primary btn-sm'
            //   type='button'
            //   onClick={() => props.auth.setAuthModal(true)}
            // >
            //   Login
            // </button>

            <button
              className="theme2-btn theme2-btn-primary theme2-btn-sm"
              type="button"
              onClick={() => props.setLoginModal(true)}
            >
              Login
            </button>
          )}
          {windowWidth <= 992 && props.authSession?.session && (
            <Link
              to="console/my-profile"
              className="theme2-btn theme2-btn-primary theme2-btn-xs text-white"
            >
              My Dashboard
            </Link>
          )}
          <button
            className="theme2-navbar-toggler"
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

          <div
            className={`theme2-collapse theme2-navbar-collapse ${
              dropdownMenu ? 'theme2-show' : ''
            }`}
            id="ftco-nav"
          >
            <ul className="theme2-navbar-nav ml-auto">
              {props.pageData.content.content.links.length > 0 &&
                props.pageData.content.content.links.map((link, index) => (
                  <li key={index} className="theme2-nav-item theme2-mt-2">
                    <Link
                      to={link.link}
                      className="theme2-nav-link"
                      style={{
                        color: '#000',
                        fontSize: '13px',
                        fontWeight: '500',
                        letterSpacing: '1px',
                        opacity: '1!important',
                        padding: '0.9rem 20px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}

              {/* {windowWidth >= 992 && ( */}
              <>
                {props.authSession?.session ? (
                  <>
                    {/* <li className='theme2-nav-item theme2-dropdown'>
											<a
												className={`theme2-nav-link theme2-dropdown-toggle ${
													profileDropdown ? 'theme2-show' : ''
												}`}
												href='#!'
												id='h6-dropdown'
												data-bs-toggle='dropdown'
												aria-haspopup='true'
												aria-expanded='true'
												onClick={() => setProfileDropdown(!profileDropdown)}
											>
												<img
													src={profile}
													referrerPolicy='no-referrer'
													alt='userP'
													style={{ width: '1.7rem', height: '1.7rem' }}
													className={`theme2-img-responsive theme2-rounded-circle theme2-dropdown-toggle`}
												/>
											</a>
											<ul
												className={`theme2-b-none theme2-dropdown-menu theme2-font-14 theme2-animated theme2-fadeInUp ${
													profileDropdown ? 'theme2-show' : ''
												}`}
												data-bs-popper='none'
												ref={userDropDownOnClick}
											>
												<li>
													<Link
														className='theme2-dropdown-item'
														to='console/my-profile'
													>
														My Profile
													</Link>
												</li>
												<li className='theme2-divider' role='separator' />
												<li>
													<a
														className='theme2-dropdown-item'
														href='#!'
														onClick={props.userLogout}
													>
														Logout
													</a>
												</li>
											</ul>
										</li> */}
                    <li className="theme2-nav-item theme2-mt-2">
                      <Link
                        to="console/my-profile"
                        className="theme2-nav-link"
                        style={{
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '500',
                          letterSpacing: '1px',
                          opacity: '1!important',
                          padding: '0.9rem 20px',
                          textTransform: 'uppercase',
                        }}
                      >
                        My Dashboard
                      </Link>
                    </li>
                    <li className="theme2-nav-item theme2-mt-2">
                      <a
                        className="theme2-nav-link"
                        style={{
                          color: '#000',
                          fontSize: '13px',
                          fontWeight: '500',
                          letterSpacing: '1px',
                          opacity: '1!important',
                          padding: '0.9rem 20px',
                          textTransform: 'uppercase',
                        }}
                        href="#!"
                        onClick={props.userLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </>
                ) : (
                  // <li className='nav-item cta'>
                  //   <img
                  //     src={profile}
                  //     className='cursor_Pointer'
                  //     alt='User Roles'
                  //     title='User Roles'
                  //     style={{ width: '1.2rem', height: '1.2rem' }}
                  //     id='gLoginBtn'
                  //   />
                  // </li>
                  <li className="theme2-nav-item theme2-mt-3">
                    <button
                      className="theme2-btn theme2-btn-primary theme2-btn-sm"
                      type="button"
                      onClick={() => props.setLoginModal(true)}
                    >
                      Login
                    </button>
                  </li>
                )}
              </>
              {/* )} */}
            </ul>
          </div>
        </div>
      </nav>

      {props.authSession?.session && (
        <div
          className="theme2-custfooter theme2-fixed-bottom p-3 theme2-d-lg-none theme2-b-t mt-5"
          style={{
            backgroundColor: '#FFFFFF',
            paddingTop: '12px !important',
            boxShadow: '0 -10px 10px -10px rgba(0,0,0,.1)',
          }}
        >
          <div className="row">
            <div className="col-6">
              <Link to="/console/my-profile">
                <img
                  src={profile}
                  className="cursor_Pointer"
                  alt="My Profile"
                  title="My Profile"
                  style={{ width: '1.7rem', height: '1.7rem' }}
                />
              </Link>
            </div>
            <div className="col-6 text-right">
              <i
                onClick={props.userLogout}
                style={{ fontSize: '1.5rem' }}
                alt="Logout"
                title="Logout"
                className="fa fa-sign-out  cursor_Pointer"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

Navbar1T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

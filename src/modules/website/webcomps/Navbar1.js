import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './navbar1.css'

export const Navbar1 = ({ authSession, setLoginModal, userLogout, pageData }) => {
  return (
    <nav className="nav1-nav" style={{ top: 0 }}>
      <div className="nav1-wrapper">
        <div className="nav1-logo">
          <Link to="/" className="nav1-logo">
            <img
              src={pageData.logo.logo}
              className="img-fluid"
              alt="logo"
              style={{ width: '60%' }}
            />
          </Link>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav1-nav-links">
          <label htmlFor="close-btn" className="btn close-btn">
            <i className="fa fa-times" />
          </label>
          {pageData.links.links.length > 0 &&
            pageData.links.links.map((link, linkIndex) =>
              link.childItems ? (
                <li key={linkIndex}>
                  <Link to={link.link} className="desktop-item">
                    {link.name}
                  </Link>
                  <input type="checkbox" id="showDrop" />
                  <label htmlFor="showDrop" className="mobile-item">
                    {link.name}
                  </label>
                  <ul className="drop-menu">
                    {link.childItems.length > 0 &&
                      link.childItems.map((l, lI) => (
                        <li>
                          <Link key={lI} to={l.link}>
                            {l.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ) : (
                <li key={linkIndex}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ),
            )}
          {authSession ? (
            <li className="nav-linksnohover">
              <Link to="/console/my-profile" title="My Profile" style={{ position: 'relative' }}>
                <img
                  src={require('../../../assets/images/default-avatar.png').default}
                  className="img-fluid"
                  alt="notifications"
                  style={{ width: '20%' }}
                />
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
            <li className="nav-linksnohover">
              <Link
                to="#!"
                title="Login"
                style={{ position: 'relative' }}
                onClick={() => setLoginModal(true)}
              >
                <img
                  src={require('../../../assets/images/default-avatar.png').default}
                  className="img-fluid"
                  alt="notifications"
                  style={{ width: '20%' }}
                />
              </Link>
            </li>
          )}
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fa fa-bars" />
        </label>
      </div>
    </nav>
  )
}

Navbar1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

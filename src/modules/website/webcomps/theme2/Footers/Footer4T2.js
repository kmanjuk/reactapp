import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Footer4 = (props) => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const errState = { error: false }
  try {
    return (
      <div id="footer4-html">
        <div className="footer4 spacer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 m-b-30">
                <h5 className="m-b-20">Address</h5>
                <p>{props.pageData.address.address}</p>
              </div>
              <div className="col-lg-3 col-md-6 m-b-30">
                <h5 className="m-b-20">Phone</h5>
                <p>{props.pageData.phone.phone}</p>
              </div>
              <div className="col-lg-3 col-md-6 m-b-30">
                <h5 className="m-b-20">Email</h5>
                <p>
                  <a href={`mailto:${props.pageData.email.email}`} className="link">
                    {props.pageData.email.email}
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="m-b-20">Social</h5>
                <div className="round-social light">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1SocialLinks' && (
                        <a
                          key={linkIndex}
                          href={link.link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          <i className={`fa fa-${link.icon.icon}`} />
                        </a>
                      ),
                  )}
                </div>
              </div>
            </div>
            <div className="f4-bottom-bar">
              <div className="row">
                <div className="col-md-12">
                  <nav className="navbar navbar-expand-lg h1-nav">
                    <Link className="navbar-brand" to="/">
                      <img src={props.pageData.footerLogo.footerLogo} alt="trt" />
                    </Link>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#header1"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                      onClick={() => setOpenMenu(!openMenu)}
                    >
                      <span className="ti-menu" />
                    </button>
                    <div className={`collapse navbar-collapse ${openMenu && 'show'}`} id="header1">
                      <span className="hidden-lg-down">{props.pageData.copyright.copyright}</span>
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        {props.pageData.childItems.map(
                          (link, linkIndex) =>
                            link.className.className === 'Footer1LinkItem' && (
                              <li key={linkIndex} className="nav-item">
                                <Link to={link.link.link} className="nav-link">
                                  {link.linkName.linkName}
                                </Link>
                              </li>
                            ),
                        )}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Footer4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

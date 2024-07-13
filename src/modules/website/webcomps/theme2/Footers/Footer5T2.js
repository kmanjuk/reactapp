import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const Footer5 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="footer5-html">
        <div className="footer5 spacer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 m-b-30">
                <ul className="general-listing">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1LinkItem' && (
                        <li key={linkIndex}>
                          <Link to={link.link.link}>{link.linkName.linkName}</Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>

              <div className="col-md-4 m-b-30">
                <div className="d-flex no-block">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Location-2" />
                  </div>
                  <div className="info">
                    <span className="font-medium text-dark db m-t-5">Address</span>
                    <br />
                    <p>{props.pageData.address.address}</p>
                  </div>
                </div>
                <div className="d-flex no-block m-b-10">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Phone-2" />
                  </div>
                  <div className="info">
                    <span className="font-medium text-dark db  m-t-5">
                      {props.pageData.phone.phone}
                    </span>
                  </div>
                </div>
                <div className="d-flex no-block m-b-30">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Mail" />
                  </div>
                  <div className="info">
                    <a
                      href={`mailto:${props.pageData.email.email}`}
                      className="font-medium text-dark db  m-t-5"
                    >
                      {props.pageData.email.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 m-b-30">
                <img src={props.pageData.footerLogo.footerLogo} alt="trt" />
                <div className="social-links">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1SocialLinks' && (
                        <a
                          key={linkIndex}
                          href={link.link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fa fa-${link.icon.icon}`} />
                        </a>
                      ),
                  )}
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

Footer5.propTypes = {
  pageData: PropTypes.object.isRequired,
}

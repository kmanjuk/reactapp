import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import android from '../../../../assets/images/android.png'
import apple from '../../../../assets/images/apple.png'

export const Footer2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="footer2-html">
        <div className="footer2 font-14 bg-dark">
          <div className="f2-topbar container">
            <div className="d-block d-md-flex">
              <Link to="/">
                <img src={props.pageData.footerLogo.footerLogo} alt="trt" />
              </Link>
              <div className="ms-auto align-self-center mt-3 mt-md-0">
                {props.pageData.copyright.copyright}
              </div>
            </div>
          </div>
          <div className="f2-middle">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <p className="p-t-10">{props.pageData.footerText.footerText} </p>
                  <div className="m-t-20 m-b-30">
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
                <div className="col-lg-2 col-md-6">
                  <ul className="general-listing">
                    {props.pageData.childItems.map(
                      (link, linkIndex) =>
                        link.className.className === 'Footer1LinkItem' && (
                          <li key={linkIndex}>
                            <Link to={link.link.link}>
                              <i className="fa fa-circle" /> {link.linkName.linkName}
                            </Link>
                          </li>
                        ),
                    )}
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 info-box">
                  <div className="d-flex no-block">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Location-2" />
                    </div>
                    <div className="info">
                      <p>{props.pageData.address.address}</p>
                    </div>
                  </div>
                  <div className="d-flex no-block">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Phone-2" />
                    </div>
                    <div className="info">
                      <span className="font-medium text-muted db  m-t-5">
                        {props.pageData.phone.phone}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex no-block">
                    <div className="display-7 m-r-20 align-self-top">
                      <i className="icon-Mail" />
                    </div>
                    <div className="info">
                      <a
                        href={`mailto:${props.pageData.email.email}`}
                        className="font-medium text-muted db  m-t-5"
                      >
                        {props.pageData.email.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="subscribe-box">
                    <div className="display-4 text-white">
                      <a
                        href={props.pageData.androidLink.androidLink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img className="img-responsive" src={android} alt="download android app" />
                      </a>
                    </div>

                    <div className={`display-4 text-white ${props.windowWidth < 992 && 'mt-2'}`}>
                      <a
                        href={props.pageData.appleLink.appleLink}
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img className="img-responsive" src={apple} alt="download apple app" />
                      </a>
                    </div>
                    <p className="mt-2 text-center">Download Apps</p>
                  </div>
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

Footer2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

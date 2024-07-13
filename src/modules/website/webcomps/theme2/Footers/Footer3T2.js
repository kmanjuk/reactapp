import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import android from '../../../../assets/images/android.png'
import apple from '../../../../assets/images/apple.png'

export const Footer3 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="footer3-html">
        <div className="footer3 bg-dark font-14">
          <div className="f3-topbar container">
            <div className="d-flex">
              <div className="d-flex no-block align-items-center">
                <Link href="#" className="m-r-20">
                  <img src={props.pageData.footerLogo.footerLogo} alt="footer1logo" />
                </Link>
                <span>{props.pageData.footerText.footerText}</span>
              </div>
            </div>
          </div>
          <div className="f3-middle container">
            <div className="row">
              <div className="col-md-4 m-b-30">
                <h6 className="font-medium text-white">{props.pageData.linkHeader.linkHeader}</h6>
                <ul className="general-listing">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1LinkItem' && (
                        <li key={linkIndex}>
                          <Link to={link.link.link}>
                            <i className="ti-arrow-right" /> {link.linkName.linkName}
                          </Link>
                        </li>
                      ),
                  )}
                </ul>
              </div>
              <div className="col-md-4 m-b-30">
                <h6 className="font-medium text-white">CONTACT</h6>
                <div className="d-flex no-block m-b-10 m-t-20">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Location-2" />
                  </div>
                  <div className="info">
                    <p>{props.pageData.address.address}</p>
                  </div>
                </div>
                <div className="d-flex no-block m-b-10">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Phone-2" />
                  </div>
                  <div className="info">
                    <span className=" db  m-t-5">{props.pageData.phone.phone}</span>
                  </div>
                </div>
                <div className="d-flex no-block m-b-30">
                  <div className="display-7 m-r-20 align-self-top">
                    <i className="icon-Mail" />
                  </div>
                  <div className="info">
                    <a href={`mailto:${props.pageData.email.email}`} className="link db  m-t-5">
                      {props.pageData.email.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 m-b-30">
                <h6 className="font-medium text-white">
                  {props.pageData.downloadText.downloadText}
                </h6>
                <div className="subscribe-box">
                  <div className="display-4 text-white mb-2">
                    <a
                      href={props.pageData.androidLink.androidLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img className="img-responsive" src={android} alt="download android app" />
                    </a>
                  </div>

                  <div className="display-4 text-white">
                    <a
                      href={props.pageData.androidLink.androidLink}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <img className="img-responsive" src={apple} alt="download apple app" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="f3-bottom-bar">
            <div className="container">
              <div className="d-block d-md-flex">
                <span className="m-t-10 m-b-10">{props.pageData.copyright.copyright}</span>
                <div className="ms-auto m-t-10 m-b-10">
                  {props.pageData.childItems.map(
                    (link, linkIndex) =>
                      link.className.className === 'Footer1SocialLinks' && (
                        <a
                          key={linkIndex}
                          href={link.link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link p-10"
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

Footer3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

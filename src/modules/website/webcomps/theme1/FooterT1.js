import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const FooterT1 = ({ pageData }) => {
  return (
    <footer
      className="theme1-footer-light-style theme1-bg-seprator theme1-skew-seven theme1-wow theme1-fadeIn theme1-yit-footer-newsletter theme1-light-grey-color-bg"
      data-wow-delay="0.3s"
      style={{
        visibility: 'visible',
        '-webkit-animation-delay': '0.3s',
        'animation-delay': '0.3s',
        '-webkit-animation-name': '_fadeIn',
        'animation-name': '_fadeIn',
      }}
    >
      <div className="theme1-yit-footer style-1">
        <div className="theme1-container">
          <div className="theme1-row">
            <div className="theme1-col-xl-4 theme1-col-lg-4 theme1-col-md-6">
              <h6 className="theme1-font-xxsmall theme1-text-uppercase theme1-text-left theme1-border-left-only theme1-border-width-3 theme1-pink-color-border theme1-pl-15 theme1-mb-30 theme1-sm-mb-20">
                {pageData.content.content.header1}
              </h6>
              <img
                src={pageData.content.content.logo}
                alt={pageData.content.content.logoTitle}
                width={214}
                height={47}
              />
              <p className="theme1-mt-10">{pageData.content.content.text}</p>
            </div>
            <div className="theme1-col-xl-4 theme1-col-lg-4 theme1-col-md-6">
              <h6 className="theme1-font-xxsmall theme1-text-uppercase theme1-text-left theme1-border-left-only theme1-border-width-3 theme1-pink-color-border theme1-pl-15 theme1-mb-30 theme1-sm-mb-20">
                {pageData.content.content.header2}
              </h6>
              <ul className="theme1-quick-links theme1-yit-listing-block theme1-nav-active theme1-font-weight-light">
                {pageData.content.content.header2Links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="theme1-col-xl-4 theme1-col-lg-4 theme1-col-md-6">
              <h6 className="theme1-font-xxsmall theme1-text-uppercase theme1-text-left theme1-border-left-only theme1-border-width-3 theme1-pink-color-border theme1-pl-15 theme1-mb-30 theme1-sm-mb-20">
                Contact Us
              </h6>
              <ul className="theme1-address-info theme1-yit-listing-block">
                <li>
                  <i className="fa fa-map-marker icon-l" />
                  <p>{pageData.content.content.address}</p>
                </li>
                <li>
                  <i className="fa fa-phone icon-l" />
                  <p>
                    <a href="tel:123456789" title="Call Us">
                      {pageData.content.content.phone}
                    </a>
                  </p>
                </li>
                <li>
                  <i className="fa fa-envelope-open icon-l" />
                  <p>
                    <a href={`mailto:${pageData.content.content.email}`} title="Email Us">
                      {pageData.content.content.email}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="theme1-yit-foot-widget theme1-style-1 border-top">
            <div className="theme1-row">
              <div className="theme1-col-xl-6 theme1-col-lg-6 theme1-col-md-7">
                <p className="trade">
                  ©
                  <Link className="theme1-link-pink" to="/">
                    {pageData.content.content.copyrightText}
                  </Link>{' '}
                </p>
              </div>
              <div className="theme1-col-xl-6 theme1-col-lg-6 theme1-col-md-5">
                <div className="theme1-yit-social theme1-float-right theme1-style-6">
                  <ul>
                    {pageData.content.content.social.length > 0 &&
                      pageData.content.content.social.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            className={link.icon}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className={`fa fa-${link.icon}`} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

FooterT1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

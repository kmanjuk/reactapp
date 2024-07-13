import React from 'react'
import PropTypes from 'prop-types'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = ({ pageData }) => {
  return (
    <footer className="footer-footer-16371">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-footer-site-logo mb-4">
              <img src={pageData.logo.logo} className="img-fluid" alt="logo" />
            </div>
            <ul className="list-unstyled footer-nav-links mb-5">
              {pageData.links.links.length > 0 &&
                pageData.links.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.link}>{link.name}</Link>
                  </li>
                ))}
            </ul>
            <div className="footer-social mb-4">
              <h3>{pageData.socialLinks.socialLinks.title}</h3>
              <ul className="list-unstyled">
                {pageData.socialLinks.socialLinks.links?.length > 0 &&
                  pageData.socialLinks.socialLinks.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="fb">
                      <a href={link.link} target="_blank" rel="noreferrer noopener">
                        <span className={`fa fa-${link.i}`} />
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="footer-copyright">
              <p className="mb-0">
                <small>© {pageData.copyright.copyright}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Footer component displaying various footer sections including social links, additional links, and copyright information.
 *
 * This component renders the footer of the page with sections for social media links, additional navigation links, and copyright information.
 *
 * @module ThemeT1/T1Footer1
 * @description This component renders the footer of the page with sections for social media links, additional navigation links, and copyright information.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the footer.
 * @param {Object} props.pageData.content - Content of the footer.
 * @param {string} props.pageData.content.content.header - The header text for the footer section.
 * @param {string} props.pageData.content.content.text - The descriptive text for the footer section.
 * @param {Object[]} props.pageData.content.content.social - List of social media links.
 * @param {string} props.pageData.content.content.social[].link - URL of the social media profile.
 * @param {string} props.pageData.content.content.social[].icon - FontAwesome icon class for the social media icon.
 * @param {Object[]} props.pageData.content.content.links - List of additional navigation links.
 * @param {Object[]} props.pageData.content.content.links[].childLinks - List of child links under each additional link.
 * @param {string} props.pageData.content.content.links[].childLinks[].link - URL of the child link.
 * @param {string} props.pageData.content.content.links[].childLinks[].name - Display name of the child link.
 * @param {string} props.pageData.content.content.links[].title - Title of the additional links section.
 * @param {string} props.pageData.content.content.links[].size - CSS class for column size.
 * @param {string} props.pageData.content.content.copyrightPref - Copyright prefix text (e.g., "All rights reserved").
 * @param {string} props.pageData.content.content.copyright - Copyright year or text.
 * @returns {JSX.Element} The rendered footer component.
 */
export const T1Footer1 = ({ pageData }) => {
  return (
    <footer id="footer" className="t1-footer ">
      <div className="t1-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="t1-single-footer">
                <h2>{pageData.content.content.header}</h2>
                <p>{pageData.content.content.text}</p>
                <ul className="t1-social">
                  {pageData.content.content.social.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link}>
                        <i className={`fa fa-${link.icon}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {pageData.content.content.links.map((link, linkIndex) => (
              <div key={linkIndex} className={link.size}>
                <div className="t1-single-footer t1-f-link">
                  <h2>{link.title}</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {link.childLinks.map((cLink, cLinkIndex) => (
                          <li key={cLinkIndex}>
                            <Link to={cLink.link}>
                              <i className="fa fa-caret-right" aria-hidden="true" />
                              {cLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="t1-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="t1-copyright-content">
                <p>
                  © {pageData.content.content.copyrightPref} {pageData.content.content.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

T1Footer1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

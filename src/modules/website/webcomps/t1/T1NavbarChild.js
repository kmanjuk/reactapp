import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1NavbarChild
 * @description Renders T1NavbarChild page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1NavbarChild pageData={pageData} />
 */
export const T1NavbarChild = ({ nav, navIndex }) => {
  /**
   * @callback ChildLinkStateSetter
   * @param {ChildLinkState} state
   * @returns {void}
   */
  const [childLink, setChildLink] = React.useState(false)

  /**
   * Render T1NavbarChild page
   * @function T1NavbarChild
   * @description render T1NavbarChild page
   * @returns html T1NavbarChild page is rendered
   */
  return (
    <li
      key={navIndex}
      className={`t1-slicknav_${childLink ? 'open' : 'collapsed'} t1-slicknav_parent pb-2`}
    >
      <a href="#!" className="slicknav_item slicknav_row" style={{ outline: 'none' }}></a>
      <a href="#!" onClick={() => setChildLink(!childLink)}>
        {nav.name} <i className="icofont-rounded-down" />
      </a>
      <span className="t1-slicknav_arrow">►</span>
      <ul
        className={`dropdown ${!childLink ? 'slicknav_hidden' : ''} pt-2`}
        role="menu"
        aria-hidden="true"
        style={{
          display: childLink ? 'block' : 'none',
          listStyleType: 'none',
        }}
      >
        {nav.childItems.map((cNav, cNavIndex) => (
          <li key={cNavIndex} className="pb-2 pl-4">
            <Link to={cNav.link} role="menuitem">
              {cNav.name}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

T1NavbarChild.propTypes = {
  nav: PropTypes.string.isRequired,
  navIndex: PropTypes.number.isRequired,
}

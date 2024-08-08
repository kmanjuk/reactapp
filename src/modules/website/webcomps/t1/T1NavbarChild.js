import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Renders a navigation item with child items for the T1 theme navbar.
 *
 * @module ThemeT1/T1NavbarChild
 * @description Renders a navigation item with child items for the T1 theme navbar.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.nav - Navigation item data.
 * @param {number} props.navIndex - Index of the navigation item.
 * @returns {JSX.Element} The rendered navigation item with child items.
 */
export const T1NavbarChild = ({ nav, navIndex }) => {
  const [childLink, setChildLink] = React.useState(false)

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
  /**
   * Navigation item data.
   */
  nav: PropTypes.object.isRequired,
  /**
   * Index of the navigation item.
   */
  navIndex: PropTypes.number.isRequired,
}

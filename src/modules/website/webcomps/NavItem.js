import React from 'react'
import PropTypes from 'prop-types'
import { useOnClickOutside } from '../../../modules/lib/OnClickOutside'

export const NavItem = ({ linkName, link, dropdown, dropdownList }) => {
  const [toggleHover, setToggleHover] = React.useState(false)

  const menusClose = React.useRef()
  useOnClickOutside(menusClose, () => setToggleHover(false))
  return (
    <li className="scroll dropdown active">
      <a
        href="#!"
        className="dropdown-toggle"
        data-toggle="dropdown"
        onClick={() => setToggleHover(!toggleHover)}
      >
        <span>Dashboard</span>
        <i className="fa fa-chevron-down ml-1"></i>
      </a>
      <ul
        className="dropdown-menu animated in"
        style={{ display: toggleHover ? 'block' : 'none', opacity: '1' }}
      >
        <li className="active">
          <a href="index.html" className="active">
            <i className="mdi mdi-circle" />
            Social Media
          </a>
        </li>
        <li>
          <a href="dashboard-ecommerce.html">
            <i className="mdi mdi-circle" />
            eCommerce
          </a>
        </li>
        <li>
          <a href="dashboard-analytics.html">
            <i className="mdi mdi-circle" />
            Analytics
          </a>
        </li>
      </ul>
    </li>
  )
}

NavItem.propTypes = {
  pageData: PropTypes.object.isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

/**
 * AppLayoutMenuItems component renders a navigation item in the app layout menu.
 *
 * This component is responsible for rendering a single menu item with a link.
 * The link's active state is determined by comparing the current URL with the menu item's path.
 *
 * @module appLayout/AppLayoutMenuItems
 * @description AppLayoutMenuItems component renders a navigation item in the app layout menu.
 * @param {Object} props - The props object.
 * @param {Object} props.menuItem - The menu item object containing details like path, icon, and title.
 * @param {Function} props.setToggleMenu - Function to toggle the menu visibility.
 * @param {string} props.urlLink - The current URL path to determine the active menu item.
 * @returns {JSX.Element} The rendered menu item component.
 *
 * @example
 * const menuItem = {
 *   path: 'dashboard',
 *   apiEndPointSchema: { icon: 'dashboard-2' },
 *   pageTitle: 'Dashboard'
 * };
 * const setToggleMenu = () => {};
 * const urlLink = '/console/dashboard';
 *
 * return (
 *   <AppLayoutMenuItems
 *     menuItem={menuItem}
 *     setToggleMenu={setToggleMenu}
 *     urlLink={urlLink}
 *   />
 * );
 * Functional React component for rendering a single menu item.
 * @returns {JSX.Element} The rendered menu item.
 */

export const AppLayoutMenuItems = ({ menuItem, setToggleMenu, urlLink }) => {
  return (
    <li className="trtui-nav-item">
      {menuItem ? (
        <Link
          className={`trtui-nav-link trtui-menu-link ${urlLink === menuItem.routePath ? 'trtui-active' : ''}`}
          to={`/console/${menuItem.routePath}`}
          onClick={() => setToggleMenu(false)}
        >
          <i
            data-testid="menuItemIcon"
            className={`ri-${menuItem.apiEndPointSchema.icon || 'dashboard-2'}-line`}
          />
          <span data-key={menuItem.pageTitle}>{menuItem.pageTitle}</span>
        </Link>
      ) : (
        <></>
      )}
    </li>
  )
}

AppLayoutMenuItems.propTypes = {
  menuItem: PropTypes.object.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  urlLink: PropTypes.string.isRequired,
}

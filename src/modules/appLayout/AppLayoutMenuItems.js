import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const AppLayoutMenuItems = ({ menuItem, setToggleMenu, urlLink }) => {
  return (
    <li className="trtui-nav-item">
      {menuItem ? (
        <Link
          className={`trtui-nav-link trtui-menu-link ${urlLink === menuItem.path ? 'trtui-active' : ''}`}
          to={`/console/${menuItem.path}`}
          onClick={() => setToggleMenu(false)}
        >
          {/* <i className={menuItem.icon} /> */}
          <i className={`ri-${menuItem.apiEndPointSchema.icon || 'dashboard-2'}-line`} />
          <span data-key={menuItem.pageTitle}>{menuItem.pageTitle}</span>
        </Link>
      ) : (
        <>
          {/* <span
						className={`trtui-nav-link trtui-menu-link ${
							!expandMenu && "trtui-collapsed"
						}`}
						data-bs-toggle="collapse"
						role="button"
						aria-expanded={expandMenu}
						aria-controls="sidebarApps"
						onClick={() => setExpandMenu(!expandMenu)}
					>
						<i className={menuItem.icon} />
						<span data-key={menuItem.groupName}>{menuItem.groupName}</span>
					</span>
					<div
						className={`trtui-collapse trtui-menu-dropdown ${
							expandMenu && "trtui-show"
						}`}
						id={menuItem.groupName}
					>
						{menuItem.groupItems && menuItem.groupItems.length > 0 && (
							<ul className="trtui-nav trtui-nav-sm trtui-flex-column">
								{menuItem.groupItems.map((item, itemIndex) => (
									<li key={itemIndex} className="trtui-nav-item">
										<Link
											to={item.link}
											className="trtui-nav-link"
											data-key="t-chat"
										>
											{item.name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</div> */}
        </>
      )}
    </li>
  )
}

AppLayoutMenuItems.propTypes = {
  menuItem: PropTypes.object.isRequired,
  setToggleMenu: PropTypes.func.isRequired,
  urlLink: PropTypes.string.isRequired,
}

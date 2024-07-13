import React from 'react'
import PropTypes from 'prop-types'
import { useDrag } from 'react-dnd'

import { useGetCall } from '../../../lib/api/get'
import httpParams from '../../../lib/httpParams'

export const CompBar = ({ setShowCompBar, appVariables, elemTypes, webSettings }) => {
  const params = httpParams.adminOrgParams(appVariables)
  const elementData = elemTypes
  const [activPill, setActivPill] = React.useState('components')

  const Drags = ({ element }) => {
    const [{ isDragging }, drag] = useDrag({
      item: element,
      type: 'elementType',
      collect: (monitor) => ({
        opacity: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
      <div
        className="mb-2 cursor-move"
        data-tip
        data-for={element.elementTypeName}
        ref={drag}
        style={{ opacity }}
      >
        <span className="btn input-block-level btn-outline-primary">{element.elementTypeName}</span>
      </div>
    )
  }

  if (elementData.isLoading) {
    return (
      <div
        id="infobar-notifications-sidebar-compBar"
        className="infobar-notifications-sidebar sidebarshow"
        style={{ left: 0 }}
      >
        <div className="infobar-notifications-sidebar-head d-flex w-100 justify-content-between">
          <h4>Components</h4>
          <span
            onClick={() => setShowCompBar(false)}
            id="infobar-notifications-close"
            className="infobar-notifications-close"
          >
            <img
              src={require('../../../assets/images/svg-icon/close.svg').default}
              className="img-fluid menu-hamburger-close"
              alt="close"
            />
          </span>
        </div>
        <div className="infobar-notifications-sidebar-body">
          <div className="tab-content" id="infobar-pills-tabContent">
            <div
              className={`tab-pane fade ${activPill === 'components' && 'active show'}`}
              id="pills-messages"
              role="tabpanel"
              aria-labelledby="pills-messages-tab"
            >
              <ul className="list-unstyled">
                <li className="media">Loading...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getChildCompChild = (parenInd) => {
    return elementData.data?.formData.filter((el) => {
      return webSettings['webSettings-contactForm'].componentSchema.elementCategories[
        parenInd
      ]?.components.some((f) => {
        return f === el.elementTypeName && el.elementCSSLibraryName === 'UINEW'
      })
    })
  }

  return (
    <div
      id="infobar-notifications-sidebar-compBars"
      className="infobar-notifications-sidebar sidebarshow"
      style={{ left: 0 }}
    >
      <div className="infobar-notifications-sidebar-head d-flex w-100 justify-content-between">
        <h4>Components</h4>
        <span
          onClick={() => setShowCompBar(false)}
          id="infobar-notifications-close"
          className="infobar-notifications-close"
        >
          <img
            src={require('../../../assets/images/svg-icon/close.svg').default}
            className="img-fluid menu-hamburger-close"
            alt="close"
          />
        </span>
      </div>
      <div className="infobar-notifications-sidebar-body">
        <div className="tab-content" id="infobar-pills-tabContent">
          <div
            className={`tab-pane fade ${activPill === 'components' && 'active show'}`}
            id="pills-messages"
            role="tabpanel"
            aria-labelledby="pills-messages-tab"
          >
            {webSettings['webSettings-contactForm'].componentSchema.elementCategories
              .sort((a, b) => a.category.localeCompare(b.category))
              .map((cat, catIndex) => (
                <>
                  <h6>{cat.category}</h6>
                  <ul className="list-unstyled">
                    {getChildCompChild(catIndex).map((comp, elementIndex) => (
                      <Drags key={elementIndex} element={comp} />
                    ))}
                  </ul>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

CompBar.propTypes = {
  pageData: PropTypes.object.isRequired,
}

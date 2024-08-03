import React from 'react'
import PropTypes from 'prop-types'
import '../assets/css/spinners.css'

import { mainUILoad } from '../lib/uiHelper'

export const Loading = ({ envData, appDataParsed }) => {
  mainUILoad(
    envData.REACT_APP_PRIMARY_COLOR,
    envData.REACT_APP_SECONDARY_COLOR,
    envData.REACT_APP_THEME_FAVICON,
  )

  const loader = {
    dualRing: 'lds-dual-ring',
    circle: 'lds-circle',
    facebook: 'lds-facebook',
    heart: 'lds-heart',
    ring: 'lds-ring',
    roller: 'lds-roller',
    default: 'lds-default',
    ellipsis: 'lds-ellipsis',
    grid: 'lds-grid',
    hourglass: 'lds-hourglass',
    ripple: 'lds-ripple',
    spinner: 'lds-spinner',
  }

  return (
    <div className="custom-spinner">
      <div className="custom-spinner-container">
        <div
          className={
            appDataParsed
              ? appDataParsed.webSettings['webSettings-defaultSpinner']
              : loader.dualRing
          }
        ></div>
      </div>
    </div>
  )
}

Loading.propTypes = {
  envData: PropTypes.object.isRequired,
  appDataParsed: PropTypes.object,
}

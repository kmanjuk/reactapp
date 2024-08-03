import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import '../../assets/css/custom.min.css'
import '../../assets/css/icons.min.css'

export const ThemeHelmet = ({ defaultTheme }) => {
  if (defaultTheme === 'T1') {
    return (
      <Helmet>
        <link
          rel="stylesheet"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/css/normalize.css"
        />
        <link
          rel="stylesheet"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/style.css"
        />
        <link
          rel="stylesheet"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/css/responsive.css"
        />
      </Helmet>
    )
  } else {
    return <></>
  }
}

ThemeHelmet.propTypes = {
  defaultTheme: PropTypes.string.isRequired,
}

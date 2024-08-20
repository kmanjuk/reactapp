import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import '../../assets/css/custom.min.css'
import '../../assets/css/icons.min.css'

/**
 * ThemeHelmet component dynamically loads stylesheets based on the provided theme.
 * Currently, it supports the "T1" theme by loading the respective stylesheets.
 *
 * @module website/ThemeHelmet
 * @description ThemeHelmet component dynamically loads stylesheets based on the provided theme.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {string} props.defaultTheme - The default theme identifier.
 * @returns {JSX.Element} The Helmet component with theme-specific stylesheets.
 */
export const ThemeHelmet = ({ defaultTheme }) => {
  if (defaultTheme === 'T1') {
    return (
      <Helmet>
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/bootstrap.min.css"
        />
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/css/normalize.css"
        />
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
          href="https://thulishacdnstorage.blob.core.windows.net/resources/custom-assets/t1/style.css"
        />
        <link
          rel="preload"
          as="style"
          onLoad="this.rel='stylesheet'"
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

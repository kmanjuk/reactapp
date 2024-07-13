import React from 'react'
import PropTypes from 'prop-types'

export const Row = (props) => {
  const styleBuild = {
    width: props.pageData['componentCSS.dimensions.width']['componentCSS.dimensions.width'],
    backgroundColor:
      props.pageData['componentCSS.properties.bgColor']['componentCSS.properties.bgColor'],
  }
  const errState = { error: false }
  try {
    return (
      <div className={`spacer`} style={styleBuild}>
        {console.log(
          props.pageData['componentCSS.properties.bgColor']['componentCSS.properties.bgColor'],
        )}
        Row
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3">
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Row.propTypes = {
  pageData: PropTypes.object.isRequired,
}

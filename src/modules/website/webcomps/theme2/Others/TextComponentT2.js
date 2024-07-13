import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'

export const TextComponent = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className={`spacer ${props.pageData.containerClass.containerClass}`}>
        {parse(`${props.pageData.content.content}`)}
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

TextComponent.propTypes = {
  pageData: PropTypes.object.isRequired,
}

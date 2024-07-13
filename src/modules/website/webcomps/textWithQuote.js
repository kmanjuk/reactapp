import React from 'react'
import PropTypes from 'prop-types'
import './quote1.css'

export const TextWithQuote = ({ pageData }) => {
  console.log(pageData)
  return (
    <div className="container-fluid">
      <h3>{pageData.header.header}</h3>
      <p>{pageData.textTop.textTop}</p>
      <blockquote className="q1-blockquote">{pageData.textQuote.textQuote}</blockquote>
      <p>{pageData.textBottom.textBottom}</p>
    </div>
  )
}

TextWithQuote.propTypes = {
  pageData: PropTypes.object.isRequired,
}

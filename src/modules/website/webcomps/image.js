import React from 'react'
import PropTypes from 'prop-types'

export const Image = ({ pageData }) => {
  return (
    <div>
      <img src={pageData.image.image} className="img-fluid" alt={pageData.title.title} />
    </div>
  )
}

Image.propTypes = {
  pageData: PropTypes.object.isRequired,
}

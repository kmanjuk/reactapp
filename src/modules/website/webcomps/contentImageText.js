import React from 'react'
import PropTypes from 'prop-types'

export const ContentImageText = ({ pageData }) => {
  return pageData.isLeft?.isLeft === true ? (
    <div className="row container-fluid mb-5 mt-5" style={{ paddingTop: '70px' }}>
      <div className="col-md-6">
        <h6>{pageData.header.header}</h6>
        <h1>{pageData.title.title}</h1>
        <p>{pageData.text.text}</p>
      </div>
      <div className="col-md-6">
        <img src={pageData.image.image} alt="" className="img-fluid" />
      </div>
    </div>
  ) : (
    <div className="row container-fluid mb-5 mt-5">
      <div className="col-md-6">
        <img src={pageData.image.image} alt="" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h6>{pageData.header.header}</h6>
        <h1>{pageData.title.title}</h1>
        <p>{pageData.text.text}</p>
      </div>
    </div>
  )
}

ContentImageText.propTypes = {
  pageData: PropTypes.object.isRequired,
}

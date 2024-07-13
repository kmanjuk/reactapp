import React from 'react'
import PropTypes from 'prop-types'
//import '../../../assets/themes/t1.css'

export const T1Content1 = ({ pageData }) => {
  return (
    <section className="t1-Feautes t1-section mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title" style={{ padding: '0' }}>
              <h2 className="t1-why-choose t1-choose-left">{pageData.content.content.header}</h2>
              <hr />
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Content1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

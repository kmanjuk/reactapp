import React from 'react'
import PropTypes from 'prop-types'
import parse from 'html-react-parser'
//import '../../../assets/themes/t1.css'

export const T1Text = ({ pageData }) => {
  return (
    <section className="t1-news-single section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-12">
                <div className="t1-single-main">
                  <h1 className="t1-news-title">{pageData.content.content.header}</h1>
                  <div className="t1-news-text">{parse(pageData.content.content.text)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

T1Text.propTypes = {
  pageData: PropTypes.object.isRequired,
}

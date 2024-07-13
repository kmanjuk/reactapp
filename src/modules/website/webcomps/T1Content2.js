import React from 'react'
import { Link } from 'react-router-dom'
//import '../../../assets/themes/t1.css'

export const T1Content2 = ({ pageData }) => {
  return (
    <section className="t1-call-action t1-overlay" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12">
            <div className="t1-content mt-5 mb-5" style={{ padding: '0' }}>
              <h2>{pageData.content.content.header}</h2>
              <p>{pageData.content.content.text}</p>
              {pageData.content.content.isButton && (
                <div className="t1-button">
                  <Link to={pageData.content.content.buttonLink} className="t1-btn">
                    {pageData.content.content.buttonName}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

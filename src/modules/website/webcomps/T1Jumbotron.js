import React from 'react'
import { Link } from 'react-router-dom'
//import '../../../assets/themes/t1.css'

export const T1Jumbotron = ({ pageData }) => {
  return (
    <section className="t1-newsletter t1-section">
      <div className="container">
        <div className="row ">
          <div className="col-lg-6  col-12">
            <div className="t1-subscribe-text ">
              <h6>{pageData.content.content.header}</h6>
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="t1-subscribe-form text-right">
              <Link to={pageData.content.content.buttonLink} className="t1-btn text-center">
                {pageData.content.content.buttonName}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

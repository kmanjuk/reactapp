import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
//import '../../../assets/themes/t1.css'

export const T1Hero = ({ pageData }) => {
  return (
    <section className="t1-slider">
      <div className="t1-hero-slider">
        <div
          className="t1-single-slider"
          style={{
            backgroundImage: `url(${pageData.content.content.bgImage})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="t1-text">
                  <h1>{parse(pageData.content.content.header)}</h1>
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
        </div>
      </div>
    </section>
  )
}

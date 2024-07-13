import React from 'react'
import PropTypes from 'prop-types'
import './hero.css'
import { Link } from 'react-router-dom'

export const Hero = ({ pageData }) => {
  return (
    <>
      <div className="hero-parallax-wrapper">
        <div className="hero-hero hero-parallax-content">
          <img src={pageData.image.image} alt={pageData.imageTitle.imageTitle} />
          <div className="hero-hero__title">
            <h1>{pageData.title.title}</h1>
            <p>{pageData.text.text}</p>
            {/* <Link to={pageData.buttonLink} className='btn btn-primary'>
							{pageData.buttonName.buttonName}
						</Link> */}
          </div>
        </div>
      </div>
    </>
  )
}

Hero.propTypes = {
  pageData: PropTypes.object.isRequired,
}

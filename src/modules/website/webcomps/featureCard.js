import React from 'react'
import PropTypes from 'prop-types'
import './featureCard.css'
import { Link } from 'react-router-dom'

export const FeatureCard = ({ pageData }) => {
  return (
    <div className="feature-cards">
      {pageData.data.data.length > 0 &&
        pageData.data.data.map((card, cardIndex) => (
          <article kay={cardIndex} className="feature-information feature-card">
            <span className="feature-tag">{card.tag}</span>
            <h2 className="feature-title">{card.title}</h2>
            <p className="feature-info">{card.text}</p>
            <Link to={card.buttonLink} className="btn btn-outline-primary">
              <span>{card.buttonName}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="none"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
              </svg>
            </Link>
          </article>
        ))}
    </div>
  )
}

FeatureCard.propTypes = {
  pageData: PropTypes.object.isRequired,
}

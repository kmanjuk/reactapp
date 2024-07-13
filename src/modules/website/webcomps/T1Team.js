import React from 'react'
import PropTypes from 'prop-types'
//import '../../../assets/themes/t1.css'

export const T1Team = ({ pageData }) => {
  return (
    <section className="t1-pricing-table t1-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="t1-section-title">
              <h2>{pageData.content.content.header}</h2>
              <p>{pageData.content.content.text}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {pageData.content.content.team.map((team, teamIndex) => (
            <div key={teamIndex} className={team.size}>
              <div className="t1-single-table">
                <div className="t1-table-head">
                  <div className="t1-icon">
                    <img src={team.image} alt="" />
                  </div>
                  <h4 className="t1-title">{team.name}</h4>
                  <h6>{team.designation}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

T1Team.propTypes = {
  pageData: PropTypes.object.isRequired,
}

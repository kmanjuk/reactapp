import React from 'react'
import PropTypes from 'prop-types'
import './team.css'

export const Team = ({ pageData }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h3>{pageData.title.title}</h3>
        </div>
        {pageData.content.content.map((team, teamIndex) => (
          <div key={teamIndex} className={team.size}>
            <div className="team-our-team">
              <div className="team-picture">
                <img className="img-fluid" src={team.image} alt={team.title} />
              </div>
              <div className="team-team-content">
                <h3 className="team-name">{team.name}</h3>
                <h4 className="team-title">{team.designation}</h4>
              </div>
              <ul className="team-social">
                {team.social.map((li, liI) => (
                  <li key={liI}>
                    <a
                      href={li.link}
                      rel="noreferrer noopener"
                      className={li.icon} //'fa fa-facebook'
                      aria-hidden="true"
                    ></a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

Team.propTypes = {
  pageData: PropTypes.object.isRequired,
}

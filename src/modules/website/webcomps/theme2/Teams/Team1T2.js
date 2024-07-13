import React from 'react'
import PropTypes from 'prop-types'

export const Team1 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer bg-light team1">
        <div className="container">
          <div className="row justify-content-center m-b-30">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.team1Header.team1Header}</h2>
              <h6 className="subtitle">{props.pageData.team1Text.team1Text}</h6>
            </div>
          </div>
          <div className="row m-t-30">
            {props.pageData.childItems.map((team, teamIndex) => (
              <div key={teamIndex} className="col-lg-6">
                <div className="card card-shadow overflow-hidden">
                  <div className="row no-gutters">
                    <div
                      className="col-md-5 pro-pic"
                      style={{ background: `url(${team.image.image}) center center` }}
                    >
                      <div className="card-img-overlay">
                        <ul className="list-inline">
                          {team.childItems.length > 0 &&
                            team.childItems.map((tSocial, tSocialInd) => (
                              <li key={tSocialInd} className="list-inline-item">
                                <a
                                  href={tSocial.link.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <i className={`fa fa-${tSocial.icon.icon}`} />
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-7 bg-white">
                      <div className="p-30">
                        <h5 className="title m-t-0 font-medium">{team.name.name}</h5>
                        <p>{team.text.text}</p>
                      </div>
                    </div>
                  </div>
                  {/* Row */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        {console.log(err)}
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>
          try again
        </a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Team1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

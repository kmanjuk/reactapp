import React from 'react'
import PropTypes from 'prop-types'

export const Team2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer team2">
        <div className="container">
          <div className="row justify-content-center m-b-30">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.team2Header.team2Header}</h2>
              <h6 className="subtitle">{props.pageData.team2Text.team2Text}</h6>
            </div>
          </div>
          <div className="row m-t-30">
            {/* column  */}
            {props.pageData.childItems.map((team, teamIndex) => (
              <div key={teamIndex} className="col-lg-3 col-md-6 m-b-30">
                <div className="overflow-hidden">
                  {/* Row */}
                  <div className="row no-gutters">
                    <div
                      className="col-md-12 pro-pic"
                      style={{ background: `url(${team.image.image}) center center no-repeat` }}
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
                    <div className="col-md-12">
                      <div className="p-t-10">
                        <h5 className="title font-medium" style={{ paddingLeft: '1rem' }}>
                          {team.name.name}
                        </h5>
                        <h6 className="subtitle" style={{ paddingLeft: '1rem' }}>
                          {team.title.title}
                        </h6>
                        <p style={{ paddingLeft: '1rem' }}>{team.text.text}</p>
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
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Team2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

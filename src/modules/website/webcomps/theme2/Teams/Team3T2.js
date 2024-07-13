import React from 'react'
import PropTypes from 'prop-types'

export const Team3 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer team3 bg-light">
        <div className="container">
          <div className="row justify-content-center m-b-30">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.team3Header.team3Header}</h2>
              <h6 className="subtitle">{props.pageData.team3Text.team3Text}</h6>
            </div>
          </div>
          <div className="row m-t-30 justify-content-center">
            {props.pageData.childItems.map((team, teamIndex) => (
              <div key={teamIndex} className="col-lg-4 col-md-4 m-b-30">
                <div className="row">
                  <div className="col-md-12">
                    <img src={team.image.image} alt="trt" className="img-responsive" />
                  </div>
                  <div className="col-md-12">
                    <div className="p-t-10">
                      <h5 className="title font-medium">{team.name.name}</h5>
                      <h6 className="subtitle">{team.title.title}</h6>
                      <p>{team.text.text}</p>
                      <ul className="list-inline">
                        {team.childItems.length > 0 &&
                          team.childItems.map((tSocial, tSocialInd) => (
                            <li key={tSocialInd} className="list-inline-item">
                              <a href={tSocial.link.link} target="_blank" rel="noopener noreferrer">
                                <i className={`fa fa-${tSocial.icon.icon}`} />
                              </a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Row */}
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

Team3.propTypes = {
  pageData: PropTypes.object.isRequired,
}

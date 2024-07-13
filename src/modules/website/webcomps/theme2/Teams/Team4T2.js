import React from 'react'
import PropTypes from 'prop-types'

export const Team4 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div className="spacer team4">
        <div className="container">
          <div className="row justify-content-center m-b-30">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.team4Header.team4Header}</h2>
              <h6 className="subtitle">{props.pageData.team4Text.team4Text}</h6>
            </div>
          </div>
          <div className="row m-t-30">
            {props.pageData.childItems.map((team, teamIndex) => (
              <div className="col-lg-3 col-md-6 m-b-30">
                <div className="row">
                  <div className="col-6 col-md-6 col-lg-12 mx-auto pro-pic">
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

Team4.propTypes = {
  pageData: PropTypes.object.isRequired,
}

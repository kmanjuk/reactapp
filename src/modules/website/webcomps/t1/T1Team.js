import React from 'react'
import PropTypes from 'prop-types'

/**
 * @module modules/website/webcomps/t1/T1Team
 * @description Renders T1Team page element
 * @author Thulisha Reddy Technologies
 *
 * @component
 * @param {object} pageData page data to be rendered
 *
 * @example
 * <T1Team pageData={pageData} />
 */
export const T1Team = ({ pageData }) => {
  /**
   * Render T1Team page element
   * @function T1Team
   * @description render T1Team page element
   * @returns html T1Team page element is rendered
   */
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

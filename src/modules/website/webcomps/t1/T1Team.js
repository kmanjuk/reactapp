import React from 'react'
import PropTypes from 'prop-types'

/**
 * Renders a team section for the T1 theme.
 *
 * @module ThemeT1/T1Team
 * @description Renders a team section for the T1 theme.
 * @author Thulisha Reddy Technologies
 * @param {Object} props - The component props.
 * @param {Object} props.pageData - Data for rendering the team section.
 * @param {Object} props.pageData.content - Content data for the page.
 * @param {Object} props.pageData.content.content - Content data for the team section.
 * @param {string} props.pageData.content.content.header - Header for the team section.
 * @param {string} props.pageData.content.content.text - Text description for the team section.
 * @param {Array} props.pageData.content.content.team - Array of team member objects.
 * @param {string} props.pageData.content.content.team[].size - CSS class for team member column size.
 * @param {string} props.pageData.content.content.team[].image - URL of the team member's image.
 * @param {string} props.pageData.content.content.team[].name - Name of the team member.
 * @param {string} props.pageData.content.content.team[].designation - Designation of the team member.
 * @returns {JSX.Element} The rendered team section.
 */
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
  /**
   * Data for rendering the team section.
   */
  pageData: PropTypes.shape({
    content: PropTypes.shape({
      content: PropTypes.shape({
        header: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        team: PropTypes.arrayOf(
          PropTypes.shape({
            size: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            designation: PropTypes.string.isRequired,
          }),
        ).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

import React from 'react'
import PropTypes from 'prop-types'

export const Counter1 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className={`${
          props.pageData.headerRequired.headerRequired === 1 ? 'spacer' : 'mini-spacer'
        } ${props.pageData.style.style}`}
      >
        <div className="container">
          {/* Row */}
          {props.pageData.headerRequired.headerRequired === 1 && (
            <div className="row justify-content-center">
              <div className="col-md-12 text-center" />
              <div className="col-lg-7 col-md-9 text-center">
                <h2 className="title">{props.pageData.header.header}</h2>
                <h6 className="subtitle">{props.pageData.headerText.headerText}</h6>
              </div>
            </div>
          )}
          {/* Row */}
          <div
            className={`row ${
              props.pageData.headerRequired.headerRequired === 1 ? 'm-t-30 p-t-30' : ''
            } client-box ${props.pageData.style.style !== '.' ? 'text-white' : ''}`}
          >
            {props.pageData.childItems.map((col, colIndex) => (
              <div className="col">
                <div className="d-flex no-block">
                  <div className="display-5">
                    <i className={col.icon.icon} />
                  </div>
                  <div className="m-l-20">
                    <h1
                      className={`font-light counter m-b-0 ${
                        props.pageData.style.style !== '.' ? 'text-white' : ''
                      }`}
                    >
                      {col.number.number}
                    </h1>
                    <h6
                      className={`font-13 text-uppercase ${
                        props.pageData.style.style !== '.' ? 'text-white op-7' : 'text-muted'
                      }`}
                    >
                      {col.name.name}
                    </h6>
                  </div>
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

Counter1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

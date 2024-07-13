import React from 'react'
import PropTypes from 'prop-types'

export const PBForm = ({ comp, updatePropertyValue, updateCallMutation }) => {
  return (
    <div className="col-12">
      {Object.entries(comp).map(
        ([key, value], index) =>
          key !== 'pageElementId' &&
          key !== 'id' &&
          key !== 'childItems' &&
          key !== 'className' &&
          key !== 'pageElementPropertyId' &&
          key !== 'elementTypePropertyId' && (
            <form
              key={`${index}${key}`}
              onSubmit={(e) => updatePropertyValue(comp, e, key)}
              className="row mb-2"
            >
              <div className="col-4">{key}</div>
              <div className="col-4">
                <input
                  defaultValue={
                    typeof comp === 'object' ? JSON.stringify(comp[key][key]) : comp[key][key]
                  }
                  name={key}
                  className="form-control"
                />
              </div>
              <div className="col-2">
                <button type="submit" className="btn btn-sm btn-icon btn-success">
                  {updateCallMutation.isLoading ? (
                    <>
                      <div
                        className="spinner-border"
                        style={{
                          height: '1rem',
                          width: '1rem',
                          border: '0.15em solid currentColor',
                          borderRightColor: 'transparent',
                          marginBottom: '0.2rem',
                        }}
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>{' '}
                    </>
                  ) : (
                    <i className="fa fa-check" />
                  )}
                </button>
              </div>
            </form>
          ),
      )}
    </div>
  )
}

PBForm.propTypes = {
  pageData: PropTypes.object.isRequired,
}

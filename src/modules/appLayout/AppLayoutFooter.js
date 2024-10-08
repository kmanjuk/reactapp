import React from 'react'

/**
 * AppLayoutFooter component
 * @module appLayout/AppLayoutFooter
 * @description AppLayoutFooter component
 * @author Thulisha Reddy Technologies
 * @returns {JSX.Element} The rendered footer component
 */
export const AppLayoutFooter = () => {
  return (
    <footer className="trtui-footer" style={{ position: 'fixed', bottom: 0 }}>
      <div className="trtui-container-fluid">
        <div className="trtui-row">
          <div className="trtui-col-sm-6">© TRT.</div>
          <div className="trtui-col-sm-6">
            <div className="trtui-text-sm-end trtui-d-none trtui-d-sm-block">
              Developed by <strong>Thulisha Reddy Technologies</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

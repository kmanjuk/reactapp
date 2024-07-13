import React from 'react'
import PropTypes from 'prop-types'

export const Features17 = (props) => {
  try {
    return (
      <div className="spacer feature17">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          {/* Row  */}
          <div id="feature17-html">
            {/* {props.pageData.childItems.length>0 && props.pageData.childItems.map((item,index)=> */}
            <div className="card-group m-t-30 wrap-feature-17-box">
              {/* card  */}
              <div className="card">
                <div className="card-body text-center">
                  <div className="p-20">
                    <div className="icon-space">
                      <i
                        className={`display-5 text-info-gradiant icon-${props.pageData.icon1.icon1}`}
                      />
                    </div>
                    <h4 className="font-medium">{props.pageData.header1.header1}</h4>
                    <p>{props.pageData.text1.text1}</p>
                  </div>
                </div>
              </div>
              {/* card  */}
              <div className="card">
                <img src={props.pageData.image1.image1} className alt="featureImage" />
              </div>
              {/* card  */}
              <div className="card">
                <div className="card-body text-center">
                  <div className="p-20">
                    <div className="icon-space">
                      <i
                        className={`display-5 text-info-gradiant icon-${props.pageData.icon2.icon2}`}
                      />
                    </div>
                    <h4 className="font-medium">{props.pageData.header2.header2}</h4>
                    <p>{props.pageData.text2.text2}</p>
                  </div>
                </div>
              </div>
              {/* card  */}
            </div>

            <div className="card-group wrap-feature-17-box">
              {/* card  */}
              <div className="card">
                <img src={props.pageData.image2.image2} className alt="FeatureImage" />
              </div>
              {/* card  */}
              <div className="card">
                <div className="card-body text-center">
                  <div className="p-20">
                    <div className="icon-space">
                      <i
                        className={`display-5 text-info-gradiant icon-${props.pageData.icon3.icon3}`}
                      />
                    </div>
                    <h4 className="font-medium">{props.pageData.header3.header3}</h4>
                    <p>{props.pageData.text3.text3}</p>
                  </div>
                </div>
              </div>
              {/* card  */}
              {/* card  */}
              <div className="card">
                <img src={props.pageData.image3.image3} className alt="FeatureImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features17.propTypes = {
  pageData: PropTypes.object.isRequired,
}

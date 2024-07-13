import React from 'react'
import PropTypes from 'prop-types'

export const Features9 = (props) => {
  try {
    return (
      <div className="spacer feature9">
        <div className="container">
          {/* Row  */}
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title">{props.pageData.header.header}</h2>
              <h6 className="subtitle">{props.pageData.text.text}</h6>
            </div>
          </div>
          <div id="feature9-html">
            {/* Row  */}
            {/* {props.pageData.childItems>0 && props.pageData.childItems.map((feature, featureIndex)=> ( */}
            <div className="row m-t-40">
              {/* Column */}
              {/* {props.pageData.childItems.length>0 && props.pageData.childItems.map((item,index)=> */}

              <div className="col-md-6 wrap-feature9-box b-r b-b">
                <div className="card aos-init" data-aos="fade-right" data-aos-duration={1200}>
                  <div className="card-body d-flex">
                    <div className="align-self-center">
                      <h2 className="font-medium">{props.pageData.title.title}</h2>
                      <p className="m-t-20">{props.pageData.text1.text1}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column */}
              {/* Column */}
              {props.pageData.childItems.length > 0 &&
                props.pageData.childItems.map((item, index) => (
                  <div className={`col-md-${item.sizemd.sizemd} wrap-feature9-box b-b`}>
                    <div className="card aos-init" data-aos="fade-left" data-aos-duration={1200}>
                      <div className="card-body d-flex">
                        <div key={index} className="icon-space align-self-center">
                          <i className={`icon-${item.icon.icon} display-4 text-success-gradiant`} />
                        </div>

                        <div className="align-self-center">
                          <h5 className="font-medium">
                            <a href={item.fLink.fLink} className="linking">
                              {item.ftitle.ftitle} <i className="ti-arrow-right" />
                            </a>
                          </h5>
                          <p className="m-t-20">{item.ftext.ftext}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              {/* Column */}
              {/* Column */}
              {/* <div className='col-md-6 wrap-feature9-box b-r'>
              <div className='card aos-init' data-aos='fade-right' data-aos-duration={1200}>
                <div className='card-body d-flex'>
                  <div className='icon-space align-self-center'>
                    <i className='icon-Cloud-Smartphone display-4 text-success-gradiant' />
                  </div>
                  <div className='align-self-center'>
                    <h5 className='font-medium'>
                      <a href='javascript:void(0)' className='linking'>
                        Digital World <i className='ti-arrow-right' />
                      </a>
                    </h5>
                    <p className='m-t-20'>
                      You can relay on our amazing features list and also our customer services will
                      be great experience.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
              {/* Column */}
              {/* Column */}
              {/* <div className='col-md-6 wrap-feature9-box'>
              <div className='card aos-init' data-aos='fade-left' data-aos-duration={1200}>
                <div className='card-body d-flex'>
                  <div className='icon-space align-self-center'>
                    <i className='icon-Business-ManWoman display-4 text-success-gradiant' />
                  </div>
                  <div className='align-self-center'>
                    <h5 className='font-medium'>
                      <a href='javascript:void(0)' className='linking'>
                        Meet the Team <i className='ti-arrow-right' />
                      </a>
                    </h5>
                    <p className='m-t-20'>
                      You can relay on our amazing features list and also our customer services will
                      be great experience.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
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

Features9.propTypes = {
  pageData: PropTypes.object.isRequired,
}

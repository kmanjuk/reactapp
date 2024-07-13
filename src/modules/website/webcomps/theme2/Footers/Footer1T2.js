import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import android from '../../../../assets/images/android.png'
// import apple from '../../../../assets/images/apple.png'

export const Footer1T2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="footer1-html spacer">
        <div className="theme2-footer1 theme2-font-14">
          <div className="theme2-f1-topbar">
            <div className="theme2-container">
              <div className="theme2-row">
                <div
                  className="theme2-col-md-12 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                ></div>
              </div>
            </div>
          </div>
          <div className="theme2-f1-middle" style={{ padding: '40px 0' }}>
            <div className="theme2-container">
              <div className="theme2-row">
                <div className="theme2-col-lg-4 theme2-col-md-6">
                  <Link href="/">
                    <img src={props.pageData.content.content.footerLogo} alt="footer1logo" />
                  </Link>
                  <p className="theme2-m-t-20">{props.pageData.content.content.footerText}</p>
                </div>
                {/* Column */}
                {/* Column */}
                <div className="theme2-col-lg-4 theme2-col-md-6">
                  <div className="theme2-d-flex theme2-no-block theme2-m-b-10 theme2-m-t-20">
                    <div className="theme2-display-7 theme2-m-r-20 theme2-align-self-top">
                      <i className="theme2-icon-Location-2" />
                    </div>
                    <div className="theme2-info">
                      <span className="theme2-font-medium theme2-text-dark theme2-db theme2-m-t-5">
                        {props.pageData.content.content.addressHeader}
                      </span>
                      <br />
                      <p>{props.pageData.content.content.address}</p>
                    </div>
                  </div>
                  <div className="theme2-d-flex theme2-no-block theme2-m-b-10">
                    <div className="theme2-display-7 theme2-m-r-20 theme2-align-self-top">
                      <i className="icon-Phone-2" />
                    </div>
                    <div className="theme2-info">
                      <a
                        href={`tel:${props.pageData.content.content.phone}`}
                        className="theme2-font-medium theme2-text-dark theme2-db theme2-m-t-5"
                      >
                        {props.pageData.content.content.phone}
                      </a>
                    </div>
                  </div>
                  <div className="theme2-d-flex theme2-no-block theme2-m-b-30">
                    <div className="theme2-display-7 theme2-m-r-20 theme2-align-self-top">
                      <i className="icon-Mail" />
                    </div>
                    <div className="theme2-info">
                      <a
                        href={`mailto:${props.pageData.content.content.email}`}
                        className="theme2-font-medium theme2-text-dark theme2-db theme2-m-t-5"
                      >
                        {props.pageData.content.content.email}
                      </a>
                    </div>
                  </div>
                </div>
                {/* Column */}
                {/* Column */}
                <div className="theme2-col-lg-4 theme2-col-md-12 theme2-m-t-5">
                  <h6 className="theme2-font-medium theme2-m-t-20">
                    {props.pageData.content.content.linkHeader}
                  </h6>
                  <ul className="theme2-general-listing theme2-with-arrow theme2-m-t-10">
                    {props.pageData.content.content.links.map((lk, lkIndex) => (
                      <li key={lkIndex}>
                        <Link to={lk.link}>
                          <i className="fa fa-angle-right" /> {lk.linkName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className='col-lg-3 col-md-12 m-t-5'>
                  <h6 className='font-medium m-t-20'>Download Apps</h6>
                  <div className='display-4 text-white'>
                    <a
                      href={props.pageData.content.content?.androidLink || '#'}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <img className='img-responsive' src={android} alt='download android app' />
                    </a>
                  </div>

                  <div className={`display-4 text-white mt-2`}>
                    <a
                      href={props.pageData.content.content?.appleLink || '#'}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      <img className='img-responsive' src={apple} alt='download apple app' />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          {/* Row  */}
          <div
            className="theme2-f1-bottom-bar"
            style={{
              borderTop: '1px solid hsla(210,8%,51%,.13)',
              padding: '20px 0',
            }}
          >
            <div className="theme2-container">
              <div className="theme2-d-block theme2-d-md-flex theme2-no-block">
                <div className="theme2-m-t-10 theme2-m-b-10">
                  {props.pageData.content.content.copyright}
                </div>
                <div className="theme2-links theme2-ms-auto theme2-m-t-10 theme2-m-b-10">
                  {props.pageData.content.content.socialLinks.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme2-link theme2-p-10"
                    >
                      <i className={`fa fa-${link.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    errState['error'] = true
    errState['errorStack'] = err
    return (
      <div className="theme2-mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Footer1T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

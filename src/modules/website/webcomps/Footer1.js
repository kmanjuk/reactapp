import React from 'react'
import PropTypes from 'prop-types'
import './footer1.css'
import { Link } from 'react-router-dom'

export const Footer1 = ({ pageData }) => {
  return (
    <div className="container-fluid mt-5">
      <hr />
      <div className="footer1-card bg-white">
        <div className="row mb-4">
          <div className="col-md-6 col-sm-6">
            <div className="footer-text pull-left">
              <div className="d-flex">
                <img src={pageData.logo.logo} className="img-fluid" alt="logo" />
              </div>
              <p className="card-text">{pageData.footerText.footerText}</p>
              <div className="footer1-social mt-2 mb-3">
                {pageData.footerData.footerData.socialLinks.map((link, linkIndex) => (
                  <React.Fragment key={linkIndex}>
                    {' '}
                    <i className={link.icon} />
                  </React.Fragment>
                ))}
                {/* <i className='fa fa-instagram fa-lg' />{' '}
								<i className='fa fa-twitter fa-lg' />{' '}
								<i className='fa fa-linkedin-square fa-lg' />{' '}
								<i className='fa fa-facebook' />{' '} */}
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2" />
          {pageData.footerData.footerData.links.map((link, linkIndex) => (
            <div key={linkIndex} className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="footer1-heading">{link.title}</h5>
              <ul className="card-text footer1-ul">
                {link.links.map((cLink, cLinkIndex) => (
                  <li key={cLinkIndex}>
                    <Link to={cLink.link}>{cLink.name}</Link>
                  </li>
                ))}
                {/* <li>Public Sector</li>
                                <li>Smart Office</li>
                                <li>Retail</li> */}
              </ul>
            </div>
          ))}
          {/* <div className='col-md-2 col-sm-2 col-xs-2'>
						<h5 className='footer1-heading'>Policies</h5>
						<ul className='card-text footer1-ul'>
							<li>Privacy Policy</li>
							<li>Public Sector</li>
							<li>Smart Office</li>
							<li>Retail</li>
						</ul>
					</div> */}
          {/* <div className='col-md-2 col-sm-2 col-xs-2'>
						<h5 className='footer1-heading'>Foundation</h5>
						<ul className='card-text footer1-ul'>
							<li>Home</li>
							<li>About Us</li>
							<li>Reports</li>
							<li>Contact Us</li>
						</ul>
					</div> */}
        </div>
        <div className="footer1-divider mb-4"> </div>
        <div className="row" style={{ 'font-size': '10px' }}>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-left">
              <p>
                <i className="fa fa-copyright" /> All Rights Reserved
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">
            <div className="pull-right mr-4 d-flex footer1-policy">
              <div>{pageData.footerData.footerData.copyright}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

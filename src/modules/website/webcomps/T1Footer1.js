import React from 'react'
import { Link } from 'react-router-dom'
//import '../../../assets/themes/t1.css'

export const T1Footer1 = ({ pageData }) => {
  return (
    <footer id="footer" className="t1-footer ">
      <div className="t1-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="t1-single-footer">
                <h2>{pageData.content.content.header}</h2>
                <p>{pageData.content.content.text}</p>
                <ul className="t1-social">
                  {pageData.content.content.social.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.link}>
                        <i className={`fa fa-${link.icon}`} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {pageData.content.content.links.map((link, linkIndex) => (
              <div key={linkIndex} className={link.size}>
                <div className="t1-single-footer t1-f-link">
                  <h2>{link.title}</h2>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                      <ul>
                        {link.childLinks.map((cLink, cLinkIndex) => (
                          <li key={cLinkIndex}>
                            <Link to={cLink.link}>
                              <i className="fa fa-caret-right" aria-hidden="true" />
                              {cLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className='col-lg-3 col-md-6 col-12'>
							<div className='t1-single-footer t1-f-link'>
								<h2>Quick Links</h2>
								<div className='row'>
									<div className='col-lg-6 col-md-6 col-12'>
										<ul>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Home
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													About Us
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Services
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Our Cases
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Other Links
												</a>
											</li>
										</ul>
									</div>
									<div className='col-lg-6 col-md-6 col-12'>
										<ul>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Consuling
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Finance
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Testimonials
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													FAQ
												</a>
											</li>
											<li>
												<a href='#'>
													<i className='fa fa-caret-right' aria-hidden='true' />
													Contact Us
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 col-12'>
							<div className='t1-single-footer'>
								<h2>Open Hours</h2>
								<p>
									Lorem ipsum dolor sit ame consectetur adipisicing elit do
									eiusmod tempor incididunt.
								</p>
								<ul className='t1-time-sidual'>
									<li className='day'>
										Monday - Fridayp <span>8.00-20.00</span>
									</li>
									<li className='day'>
										Saturday <span>9.00-18.30</span>
									</li>
									<li className='day'>
										Monday - Thusday <span>9.00-15.00</span>
									</li>
								</ul>
							</div>
						</div>
						<div className='col-lg-3 col-md-6 col-12'>
							<div className='t1-single-footer'>
								<h2>Newsletter</h2>
								<p>
									subscribe to our newsletter to get allour news in your inbox..
									Lorem ipsum dolor sit amet, consectetur adipisicing elit,
								</p>
								<form
									action='mail/mail.php'
									method='get'
									target='_blank'
									className='t1-newsletter-inner'
								>
									<input
										name='email'
										placeholder='Email Address'
										className='t1-common-input'
										onfocus='this.placeholder = '''
										onblur='this.placeholder = 'Your email address''
										required
										type='email'
									/>
									<button className='t1-button'>
										<i className='fa fa-paper-plane' />
									</button>
								</form>
							</div>
						</div> */}
          </div>
        </div>
      </div>
      <div className="t1-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              <div className="t1-copyright-content">
                <p>
                  © {pageData.content.content.copyrightPref} {pageData.content.content.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

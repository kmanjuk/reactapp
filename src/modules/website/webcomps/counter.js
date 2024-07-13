import React from 'react'
import PropTypes from 'prop-types'
import './counter.css'

export const Counter = ({ pageData }) => {
  return (
    <section id="count-counter" className="count-sec-padding">
      <div className="container">
        <div className="row">
          {pageData.data.data.length > 0 &&
            pageData.data.data.map((count, countIndex) => (
              <div className={count.size} key={countIndex}>
                <div className="count-count">
                  {' '}
                  <span className="fa fa-smile-o" />
                  <p className="count-number">{count.number}</p>
                  <h4>{count.text}</h4>{' '}
                </div>
              </div>
            ))}
          {/* <div className='col-md-3 '>
						<div className='count-count'>
							{' '}
							<span className='fa fa-smile-o' />
							<p className='count-number'>5+</p>
							<h4>Years Experience</h4>{' '}
						</div>
					</div>
					<div className='col-md-3 '>
						<div className='count-count'>
							{' '}
							<span className='fa fa-smile-o' />
							<p className='count-number'>5+</p>
							<h4>Projects</h4>{' '}
						</div>
					</div>
					<div className='col-md-3 '>
						<div className='count-count'>
							{' '}
							<span className='fa fa-smile-o' />
							<p className='count-number'>10+</p>
							<h4>Users</h4>{' '}
						</div>
					</div>
					<div className='col-md-3 '>
						<div className='count-count'>
							{' '}
							<span className='fa fa-smile-o' />
							<p className='count-number'>10+</p>
							<h4>Team Members</h4>{' '}
						</div>
					</div> */}
        </div>
      </div>
    </section>
  )
}

Counter.propTypes = {
  pageData: PropTypes.object.isRequired,
}

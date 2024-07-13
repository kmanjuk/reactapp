import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const CallToAction1 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div
        className="spacer c2a1 "
        style={{ backgroundImage: 'url(' + props.pageData.imageBG.imageBG + ')' }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9 text-center">
              <h2 className="title text-white font-medium">{props.pageData.header.header}</h2>
              <p className="font-light text-white op-8">{props.pageData.text.text}</p>
              <Link
                className="btn btn-danger-gradiant btn-md btn-arrow m-t-20 text-uppercase"
                to={props.pageData.buttonLink.buttonLink}
              >
                <span>
                  {props.pageData.buttonText.buttonText}
                  <i className="ti-arrow-right" />
                </span>
              </Link>
            </div>
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

CallToAction1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

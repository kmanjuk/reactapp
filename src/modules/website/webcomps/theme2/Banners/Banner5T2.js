import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Banner5T2 = ({ pageData }) => {
  const errState = { error: false }
  try {
    return (
      <div id="static-slider5-html">
        <div className="static-slider5 bg-success-gradiant">
          <div className="left-right-bg" style={{}}>
            <div className="container">
              {/* Row  */}
              <div className="row justify-content-center ">
                {/* Column */}
                <div
                  className="col-md-8 align-self-center text-center aos-init"
                  data-aos="fade-right"
                  data-aos-duration={1200}
                >
                  <h1 className="title text-white">{pageData.content.content.header}</h1>
                  <p className="text-white op-8">{pageData.content.content.text}</p>
                  <Link
                    className="btn btn-rounded btn-light btn-md btn-arrow m-t-20 m-r-10"
                    to={pageData.content.content.button1Link}
                  >
                    {pageData.content.content.button1Text}
                  </Link>{' '}
                  <Link
                    className="btn btn-rounded btn-outline-light btn-md btn-arrow m-t-20"
                    to={pageData.content.content.button2Link}
                  >
                    {pageData.content.content.button2Text}
                  </Link>
                </div>
                {/* Column */}
                <div className="col-md-12 text-center m-t-40 middle-image">
                  <img src={pageData.content.content.image} className="img-fluid" alt="trt" />
                </div>
              </div>
            </div>
            <div className="bg-white p-40" />
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

Banner5T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

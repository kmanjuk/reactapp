import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Banner9T2 = ({ pageData }) => {
  const errState = { error: false }
  try {
    return (
      <div id="static-slider9-html">
        <div className="static-slider9 po-relative">
          {/* Row  */}
          <div className="container">
            <div className="row">
              <div className="container">
                {/* Column */}
                <div className="col-lg-5 col-md-7 info-detail align-self-center">
                  <h1 className="title">{pageData.content.content.header}</h1>
                  <h6 className="subtitle">{pageData.content.content.text}</h6>
                  <Link
                    className="btn btn-md text-white btn-success-gradiant"
                    to={pageData.content.content.buttonLink}
                  >
                    {pageData.content.content.buttonText}
                  </Link>
                  {/* Column */}
                </div>
              </div>
              {/* Column */}
              <div
                className="col-md-5 bg-img"
                style={{
                  backgroundImage: `url('${pageData.content.content.imageBG}')`,
                }}
              >
                <img
                  src={pageData.content.content.image}
                  alt="trt"
                  className="img-fluid d-md-none d-lg-block aos-init"
                  data-aos="fade-up"
                  data-aos-duration={2200}
                />
              </div>
              {/* Column */}
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

Banner9T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

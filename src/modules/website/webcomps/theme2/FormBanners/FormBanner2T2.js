import { Link } from 'react-router-dom'

export const FormBanner2 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="form2-html">
        <div className="spacer form2">
          <div className="container">
            <div className="row">
              {/* Column */}
              <div
                className="col-lg-6 form-img-2 aos-init aos-animate"
                data-aos="flip-up"
                data-aos-duration={1200}
              >
                <img
                  src={props.pageData.image.image}
                  className="img-shadow img-responsive"
                  alt="trt"
                />
              </div>
              <div className="col-lg-6">
                <div className="text-box">
                  <h1 className="font-light">{props.pageData.header.header}</h1>
                  <p>{props.pageData.text.text}</p>

                  <Link
                    to={props.pageData.buttonLink.buttonLink}
                    className="btn btn-md full-width btn-danger-gradiant text-white btn-arrow"
                  >
                    {props.pageData.buttonText.buttonText}
                  </Link>
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
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

FormBanner2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

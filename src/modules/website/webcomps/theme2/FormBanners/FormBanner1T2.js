import { Link } from 'react-router-dom'

export const FormBanner1 = (props) => {
  const errState = { error: false }
  try {
    return (
      <div id="form1-html">
        <div className="bg-light">
          <section>
            <div id="banner1" className="banner spacer">
              <div className="container">
                <div className="row">
                  <div
                    className="col-md-7 col-lg-5 align-self-center aos-init aos-animate"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                  >
                    <h2 className="title font-bold">{props.pageData.header.header}</h2>
                    <p className="m-t-40 m-b-30">{props.pageData.text.text}</p>
                    <div className="m-t-40">
                      <Link
                        to={props.pageData.buttonLink.buttonLink}
                        className="btn btn-md bg-success-gradiant font-semibold font-16 btn-rounded text-uppercase text-white text-center"
                      >
                        {props.pageData.buttonText.buttonText}
                      </Link>
                    </div>
                  </div>
                  <div
                    className="col-md-5 col-lg-6 align-self-center ms-auto aos-init aos-animate"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                  >
                    <img src={props.pageData.image.image} alt="img" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </section>
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

FormBanner1.propTypes = {
  pageData: PropTypes.object.isRequired,
}

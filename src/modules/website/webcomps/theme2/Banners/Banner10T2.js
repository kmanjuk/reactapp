import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const Banner10T2 = ({ pageData }) => {
  return (
    <div id="static-slider10-html">
      <div
        className="static-slider10"
        style={{
          backgroundImage: `url('${pageData.content.content.imageBG}')`,
        }}
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div
              className="col-lg-6 col-md-8 align-self-center text-center aos-init"
              data-aos="fade-down"
              data-aos-duration={1200}
            >
              <span className="label label-rounded label-inverse">
                {pageData.content.content.badge}
              </span>
              <h1 className="title">{pageData.content.content.header}</h1>
              <h6 className="subtitle op-8">{pageData.content.content.text}</h6>
              <Link
                className="btn btn-outline-light btn-rounded btn-md btn-arrow m-t-20"
                to={pageData.content.content.buttonLink}
              >
                <span>
                  {pageData.content.content.buttonText} <i className="ti-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Banner10T2.propTypes = {
  pageData: PropTypes.object.isRequired,
}

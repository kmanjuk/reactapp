import React from 'react'
import PropTypes from 'prop-types'

export const Features44 = (props) => {
  try {
    return (
      <div className="spacer feature44 bg-light">
        <div className="container">
          <div id="feature44-html">
            <div className="row">
              <div className="col-lg-8 col-md-6 text-center align-self-center">
                <div className="max-500 m-auto">
                  {' '}
                  <h2 className="title font-light">{props.pageData.header.header}</h2>
                  <h6 className="subtitle">{props.pageData.text.text}</h6>{' '}
                  <a
                    className="btn btn-info-gradiant btn-md btn-arrow m-t-20 m-b-20"
                    data-bs-toggle="collapse"
                    href="#f44"
                  >
                    <span>
                      {props.pageData.button.button}
                      <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wrap-feature2-box">
                <div
                  className="card card-shadow aos-init"
                  data-aos="flip-up"
                  data-aos-duration={1200}
                >
                  {' '}
                  <img className="card-img-top" src={props.pageData.image.image} alt="Image" />
                  <div className="card-body text-center p-40">
                    <h6 className="text-muted">{props.pageData.subtitle.subtitle}</h6>
                    <h4 className="font-bold">{props.pageData.title.title} </h4>
                    <a
                      href="#"
                      className="btn btn-link text-decoration-none text-success m-t-30 text-underline"
                    >
                      {props.pageData.link.link}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse m-t-20" id="f44">
            <div className="card card-body card-shadow">
              <ul className="nav nav-tabs" id="myTab3" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="html-tab3"
                    data-bs-toggle="tab"
                    href="#html4"
                    role="tab"
                    aria-controls="html"
                    aria-expanded="true"
                  >
                    HTML
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="css-tab3"
                    data-bs-toggle="tab"
                    href="#css4"
                    role="tab"
                    aria-controls="css"
                  >
                    CSS
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent4">
                <div
                  className="tab-pane fade show active"
                  id="html4"
                  role="tabpanel"
                  aria-labelledby="html-tab3"
                >
                  <pre
                    className="pre-scroll ps ps--theme_default language-html"
                    data-ps-id="ae42c7ea-051b-6f26-2d93-f2d7caf88c69"
                  >
                    <code className=" language-html">
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>row
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>col-lg-8 col-md-6 text-center
                          align-self-center<span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'        '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>max-500 m-auto
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>span
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>label label-success
                          label-rounded<span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Feature{'\n'}
                      {'                '}44
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>span
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h2
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>title font-light
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Make Unlimited Websites in No-Time with WrapKit{'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h2
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h6
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>subtitle
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      You can relay on our amazing features list and also our{'\n'}
                      {'                '}customer services will be great experience for you without
                      doubt and in{'\n'}
                      {'                '}no-time{'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h6
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>a
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>btn btn-info-gradiant btn-md
                          btn-arrow m-t-20 m-b-20<span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">data-bs-toggle</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>collapse
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">href</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>#f44
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>span
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      View Feature44 code{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>i
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>ti-arrow-right
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>i
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>span
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>a
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'        '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>col-lg-4 col-md-6
                          wrap-feature2-box<span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'        '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>card card-shadow
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">data-aos</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>flip-up
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">data-aos-duration</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>1200
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>img
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>card-img-top
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">src</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>
                          assets/images/features/feature2/fruit.jpg
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">alt</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>trtui kit
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>card-body text-center p-40
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h6
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>text-muted
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Great Products
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h6
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h4
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>font-bold
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      The New way of Making Your Website in mins{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>a
                        </span>{' '}
                        <span className="token attr-name">href</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>#
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>btn btn-link
                          text-decoration-none text-success m-t-30 text-underline
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      View{'\n'}
                      {'                    '}Other Features
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>a
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'        '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                    </code>
                    <div className="ps__scrollbar-x-rail" style={{ left: '0px', bottom: '0px' }}>
                      <div
                        className="ps__scrollbar-x"
                        tabIndex={0}
                        style={{ left: '0px', width: '0px' }}
                      />
                    </div>
                    <div className="ps__scrollbar-y-rail" style={{ top: '0px', right: '0px' }}>
                      <div
                        className="ps__scrollbar-y"
                        tabIndex={0}
                        style={{ top: '0px', height: '0px' }}
                      />
                    </div>
                  </pre>
                </div>
                <div className="tab-pane fade" id="css4" role="tabpanel" aria-labelledby="css-tab">
                  <pre
                    className="pre-scroll ps ps--theme_default language-css"
                    data-ps-id="23a0ee1b-b69c-4eda-1895-372a78f544cb"
                  >
                    <code className=" language-css">No CSS Required.</code>
                    <div className="ps__scrollbar-x-rail" style={{ left: '0px', bottom: '0px' }}>
                      <div
                        className="ps__scrollbar-x"
                        tabIndex={0}
                        style={{ left: '0px', width: '0px' }}
                      />
                    </div>
                    <div className="ps__scrollbar-y-rail" style={{ top: '0px', right: '0px' }}>
                      <div
                        className="ps__scrollbar-y"
                        tabIndex={0}
                        style={{ top: '0px', height: '0px' }}
                      />
                    </div>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (err) {
    return (
      <div className="mb-3" style={{ marginTop: '7rem', textAlign: 'center' }}>
        Some parts of webpage loaded with errors, <a href={window.location.pathname}>try again</a>{' '}
        if not displayed properly.
      </div>
    )
  }
}

Features44.propTypes = {
  pageData: PropTypes.object.isRequired,
}

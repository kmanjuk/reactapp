import React from 'react'
import PropTypes from 'prop-types'

export const Features39 = (props) => {
  try {
    return (
      <div className="feature39 spacer wrap-feature39-box">
        <div className="container">
          <div id="feature39-html">
            <div className="row">
              <div className="col-lg-6">
                <img src={props.pageData.image.image} className="img-fluid" alt="Image" />
              </div>
              <div className="col-lg-6">
                <div className="card-body">
                  {' '}
                  <h2 className="title text-uppercase">{props.pageData.header.header}</h2>
                  <p className="m-t-40 m-b-40">{props.pageData.text.text}</p>
                  {/* column  */}
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div key={index} className="d-flex no-block m-b-40">
                        <div className="display-4 m-r-20">
                          <i className={`icon-${item.icon.icon} text-success-gradiant`} />
                        </div>
                        <div>
                          <h4>{item.title.title}</h4>
                          <h6 className="subtitle">{item.subtitle.subtitle}</h6>
                        </div>
                      </div>
                    ))}
                  <a
                    className="btn btn-success-gradiant text-white btn-md btn-arrow"
                    data-bs-toggle="collapse"
                    href="#f39"
                  >
                    <span>
                      {props.pageData.button.button}
                      <i className="ti-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="collapse m-t-20" id="f39">
            <div className="card card-body card-shadow text-dark">
              <ul className="nav nav-tabs" id="myTab8" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="html-tab8"
                    data-bs-toggle="tab"
                    href="#html9"
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
                    id="css-tab8"
                    data-bs-toggle="tab"
                    href="#css9"
                    role="tab"
                    aria-controls="css"
                  >
                    CSS
                  </a>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent8">
                <div
                  className="tab-pane fade show active"
                  id="html9"
                  role="tabpanel"
                  aria-labelledby="html-tab8"
                >
                  <pre
                    className="pre-scroll ps ps--theme_default language-html"
                    data-ps-id="4a771682-a26a-72fb-f088-60b4ec762e67"
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
                          <span className="token punctuation">'</span>col-lg-6
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>img
                        </span>{' '}
                        <span className="token attr-name">src</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>
                          assets/images/features/feature39/img1.jpg
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>img-fluid
                          <span className="token punctuation">'</span>
                        </span>{' '}
                        <span className="token attr-name">alt</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>trt
                          <span className="token punctuation">'</span>
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
                          <span className="token punctuation">'</span>col-lg-6
                          <span className="token punctuation">'</span>
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
                          <span className="token punctuation">'</span>card-body
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
                      {'                '}39
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
                          <span className="token punctuation">'</span>title text-uppercase
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Awesome Extra Ordinary Flexibility
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
                          <span className="token punctuation">&lt</span>p
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>m-t-40 m-b-40
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      You can relay on our amazing features list and also our{'\n'}
                      {'                '}customer services will be greatexperience for you without
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>p
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'            '}
                      <span className="token comment">&lt!-- column{'  '}--&gt</span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>d-flex no-block m-b-40
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>display-4 m-r-20
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>i
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>icon-Paypal
                          text-success-gradiant<span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>i
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Payment and exchange
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
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
                      You can relay on our amazing features
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
                          <span className="token punctuation">&lt/</span>div
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
                      {'            '}
                      <span className="token comment">&lt!-- column{'  '}--&gt</span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>d-flex no-block m-b-40
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>display-4 m-r-20
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>i
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>icon-Evernote
                          text-success-gradiant<span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>i
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Notes and organising
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
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
                      You can relay on our amazing features
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
                          <span className="token punctuation">&lt/</span>div
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
                      {'            '}
                      <span className="token comment">&lt!-- column{'  '}--&gt</span>
                      {'\n'}
                      {'            '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>d-flex no-block m-b-40
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>display-4 m-r-20
                          <span className="token punctuation">'</span>
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>i
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>icon-Google-Drive
                          text-success-gradiant<span className="token punctuation">'</span>
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
                          <span className="token punctuation">&lt/</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>div
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      Language{' '}
                      <span className="token entity" title="&">
                        &ampamp
                      </span>{' '}
                      Input Tools
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt/</span>h4
                        </span>
                        <span className="token punctuation">&gt</span>
                      </span>
                      {'\n'}
                      {'                    '}
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
                      You can relay on our amazing features
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
                          <span className="token punctuation">&lt/</span>div
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
                      </span>{' '}
                      <span className="token tag">
                        <span className="token tag">
                          <span className="token punctuation">&lt</span>a
                        </span>{' '}
                        <span className="token attr-name">class</span>
                        <span className="token attr-value">
                          <span className="token punctuation">=</span>
                          <span className="token punctuation">'</span>btn btn-success-gradiant
                          text-white btn-md btn-arrow<span className="token punctuation">'</span>
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
                          <span className="token punctuation">'</span>#f39
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
                      View Feature39 code{' '}
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
                <div className="tab-pane fade" id="css9" role="tabpanel" aria-labelledby="css-tab">
                  <pre
                    className="pre-scroll ps ps--theme_default language-css"
                    data-ps-id="530b87f7-0184-096e-6c95-25cbde42f428"
                  >
                    <code className=" language-css">
                      <span className="token selector">.wrap-feature39-box</span>{' '}
                      <span className="token punctuation">{'{'}</span>
                      {'\n'}
                      {'    '}
                      <span className="token selector">.col-lg-6&gtimg</span>{' '}
                      <span className="token punctuation">{'{'}</span>
                      {'\n'}
                      {'      '}
                      <span className="token property">margin-left</span>
                      <span className="token punctuation">:</span> -40px
                      <span className="token punctuation"></span>
                      {'\n'}
                      {'    '}
                      <span className="token punctuation">{'}'}</span>
                      {'\n'}
                      {'  '}
                      <span className="token punctuation">{'}'}</span>
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

Features39.propTypes = {
  pageData: PropTypes.object.isRequired,
}

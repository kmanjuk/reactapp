import React from 'react'
import PropTypes from 'prop-types'

export const Features12 = (props) => {
  try {
    return (
      <div className="spacer feature12">
        <div className="container">
          <div id="feature12-html">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="m-b-30 m-t-20">{props.pageData.header.header}</h2>
                <h4 className="text-muted font-light">{props.pageData.text.text}</h4>
                <div className="row">
                  {props.pageData.childItems.length > 0 &&
                    props.pageData.childItems.map((item, index) => (
                      <div key={index} className={`col-md-${item.sizemd.sizemd} m-t-30`}>
                        <h5 className="font-medium">{item.title.title}</h5>
                        <p>{item.text1.text1}</p>
                      </div>
                    ))}
                  {/* <div className='col-md-6 m-t-30'>
                  <h5 className='font-medium'>Retargeting Market</h5>
                  <p>
                    You can relay on our amazing features list and also our customer services will.
                  </p>
                </div>
                <div className='col-md-6 m-t-30'>
                  <h5 className='font-medium'>Fruitful Results</h5>
                  <p>
                    You can relay on our amazing features list and also our customer services will.
                  </p>
                </div>
                <div className='col-md-6 m-t-30'>
                  <h5 className='font-medium'>100% Satisfection</h5>
                  <p>
                    You can relay on our amazing features list and also our customer services will.
                  </p>
                </div> */}
                  <div className="col-lg-12 m-t-30 m-b-30">
                    <a
                      className="btn btn-info-gradiant btn-md btn-arrow"
                      data-bs-toggle="collapse"
                      href="#f12"
                    >
                      <span>
                        {props.pageData.button.button}
                        <i className="ti-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row wrap-feature-12">
                  <div className="col-md-6">
                    <div className="row">
                      {props.pageData.features.length > 0 &&
                        props.pageData.features.map((fitem, fIndex) => (
                          <div className="col-md-12">
                            <img
                              key={fIndex}
                              src={fitem.image1.image1}
                              className="rounded img-shadow img-responsive"
                              alt="Image"
                            />
                          </div>
                        ))}
                      {/* <div className='col-md-12'>
                      <img
                        src='assets/images/features/features12/img2.jpg'
                        className='rounded img-shadow img-responsive'
                        alt='trt'
                      />
                    </div> */}
                    </div>
                  </div>
                  <div className="col-md-6 uneven-box">
                    <div className="row">
                      {props.pageData.feat.length > 0 &&
                        props.pageData.feat.map((ftitem, ftIndex) => (
                          <div className="col-md-12">
                            <img
                              key={ftIndex}
                              src={ftitem.image3.image3}
                              className="rounded img-shadow img-responsive"
                              alt="image1"
                            />
                          </div>
                        ))}
                      {/* <div className='col-md-12'>
                      <img
                        src='assets/images/features/features12/img4.jpg'
                        className='rounded img-shadow img-responsive'
                        alt='trt'
                      />
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="m-t-20 collapse" id="f12">
                <div className="card card-body card-shadow">
                  <ul className="nav nav-tabs" id="myTab1" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="html-tab1"
                        data-bs-toggle="tab"
                        href="#html2"
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
                        id="css-tab1"
                        data-bs-toggle="tab"
                        href="#css2"
                        role="tab"
                        aria-controls="css"
                      >
                        CSS
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent1">
                    <div
                      className="tab-pane fade show active"
                      id="html2"
                      role="tabpanel"
                      aria-labelledby="html-tab1"
                    >
                      <pre
                        className="pre-scroll ps ps--theme_default language-html"
                        data-ps-id="72058847-6863-827a-6aaa-af5fbbb0de9d"
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
                          {'\n'}
                          {'        '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>span
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>label label-info
                              label-rounded<span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          Feature 12
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>span
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'        '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h2
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>m-b-30 m-t-20
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          Awesome with Extra Ordinary Flexibility{' '}
                          <span className="token entity" title=" ">
                            &ampnbsp
                          </span>{' '}
                          Features{'\n'}
                          {'        '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h2
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'        '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h4
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>text-muted font-light
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          You can relay on our amazing features list and{'\n'}
                          {'            '}also{'\n'}
                          {'            '}our customer services will be great experience for you
                          without doubt and in{'\n'}
                          {'            '}no-time{'\n'}
                          {'        '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h4
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
                              <span className="token punctuation">'</span>row
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
                              <span className="token punctuation">'</span>col-md-6 m-t-30
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h5
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>font-medium
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          Instant Solutions
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h5
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>p
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          You can relay on our amazing features list and also our customer services
                          {'\n'}
                          {'                    '}will.
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>p
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
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-6 m-t-30
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h5
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>font-medium
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          Retargeting Market
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h5
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>p
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          You can relay on our amazing features list and also our customer services
                          {'\n'}
                          {'                    '}will.
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>p
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
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-6 m-t-30
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h5
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>font-medium
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          Fruitful Results
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h5
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>p
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          You can relay on our amazing features list and also our customer services
                          {'\n'}
                          {'                    '}will.
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>p
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
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-6 m-t-30
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>h5
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>font-medium
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          100% Satisfection
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>h5
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>p
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          You can relay on our amazing features list and also our customer services
                          {'\n'}
                          {'                    '}will.
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt/</span>p
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
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-lg-12 m-t-30 m-b-30
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>a
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>btn btn-info-gradiant
                              btn-md btn-arrow<span className="token punctuation">'</span>
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
                              <span className="token punctuation">'</span>#f12
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
                          View Feature12 code{' '}
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
                              <span className="token punctuation">'</span>row wrap-feature-12
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
                              <span className="token punctuation">'</span>col-md-6
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
                              <span className="token punctuation">'</span>row
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                    '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-12
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
                              assets/images/features/features12/img1.jpg
                              <span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>rounded img-shadow
                              img-responsive<span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>trt
                              <span className="token punctuation">'</span>
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
                          {'                    '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-12
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
                              assets/images/features/features12/img2.jpg
                              <span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>rounded img-shadow
                              img-responsive<span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>trt
                              <span className="token punctuation">'</span>
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
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-6 uneven-box
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
                              <span className="token punctuation">'</span>row
                              <span className="token punctuation">'</span>
                            </span>
                            <span className="token punctuation">&gt</span>
                          </span>
                          {'\n'}
                          {'                    '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-12
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
                              assets/images/features/features12/img3.jpg
                              <span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>rounded img-shadow
                              img-responsive<span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>trt
                              <span className="token punctuation">'</span>
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
                          {'                    '}
                          <span className="token tag">
                            <span className="token tag">
                              <span className="token punctuation">&lt</span>div
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>col-md-12
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
                              assets/images/features/features12/img4.jpg
                              <span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">class</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>rounded img-shadow
                              img-responsive<span className="token punctuation">'</span>
                            </span>{' '}
                            <span className="token attr-name">alt</span>
                            <span className="token attr-value">
                              <span className="token punctuation">=</span>
                              <span className="token punctuation">'</span>trt
                              <span className="token punctuation">'</span>
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
                        <div
                          className="ps__scrollbar-x-rail"
                          style={{ left: '0px', bottom: '0px' }}
                        >
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
                    <div
                      className="tab-pane fade"
                      id="css2"
                      role="tabpanel"
                      aria-labelledby="css-tab"
                    >
                      <pre
                        className="pre-scroll ps ps--theme_default language-css"
                        data-ps-id="9ce03278-faa5-167c-46e4-ae586108a79a"
                      >
                        <code className=" language-css">
                          <span className="token selector">.wrap-feature-12</span>{' '}
                          <span className="token punctuation">{'{'}</span>
                          {'\n'}
                          {'    '}
                          <span className="token property">position</span>
                          <span className="token punctuation">:</span> relative
                          <span className="token selector">
                            {'\n'}
                            {'\n'}
                            {'    '}[class*='col-md-12']
                          </span>{' '}
                          <span className="token punctuation">{'{'}</span>
                          {'\n'}
                          {'      '}
                          <span className="token property">margin-bottom</span>
                          <span className="token punctuation">:</span> 30px
                          <span className="token punctuation"></span>
                          {'\n'}
                          {'      '}
                          <span className="token property">transition</span>
                          <span className="token punctuation">:</span> 0.2s ease-in
                          <span className="token selector">
                            {'\n'}
                            {'\n'}
                            {'      '}&amp:hover
                          </span>{' '}
                          <span className="token punctuation">{'{'}</span>
                          {'\n'}
                          {'        '}
                          <span className="token property">transform</span>
                          <span className="token punctuation">:</span>{' '}
                          <span className="token function">scale</span>
                          <span className="token punctuation">(</span>1.1
                          <span className="token punctuation">)</span>
                          <span className="token punctuation"></span>
                          {'\n'}
                          {'      '}
                          <span className="token punctuation">{'}'}</span>
                          {'\n'}
                          {'    '}
                          <span className="token punctuation">{'}'}</span>
                          {'\n'}
                          {'\n'}
                          {'    '}
                          <span className="token selector">.uneven-box</span>{' '}
                          <span className="token punctuation">{'{'}</span>
                          {'\n'}
                          {'      '}
                          <span className="token property">margin-top</span>
                          <span className="token punctuation">:</span> 100px
                          <span className="token punctuation"></span>
                          {'\n'}
                          {'    '}
                          <span className="token punctuation">{'}'}</span>
                          {'\n'}
                          {'  '}
                          <span className="token punctuation">{'}'}</span>
                        </code>
                        <div
                          className="ps__scrollbar-x-rail"
                          style={{ left: '0px', bottom: '0px' }}
                        >
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

Features12.propTypes = {
  pageData: PropTypes.object.isRequired,
}

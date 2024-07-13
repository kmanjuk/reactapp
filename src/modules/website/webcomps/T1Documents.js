import React from 'react'
import { Link } from 'react-router-dom'

export const T1Documents = ({ pageData }) => {
  const [docCategory, setDocCategory] = React.useState(0)
  return (
    <section className="t1-news-single t1-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="t1-main-sidebar">
              <div className="t1-single-widget category">
                <h3 className="t1-title">Documents</h3>
                <ul className="t1-categor-list" style={{ listStyleType: 'none' }}>
                  {pageData.content.content.documents.map((doc, docIndex) => (
                    <li key={docIndex}>
                      <a href="#!" onClick={() => setDocCategory(docIndex)}>
                        {doc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-12">
                <div className="t1-single-main">
                  <h1 className="t1-news-title">
                    {pageData.content.content.documents[docCategory].name}
                  </h1>
                  <div className="t1-meta">
                    <div className="meta-right">
                      {pageData.content.content.documents[docCategory].files.map(
                        (doc, docIndex) => (
                          <>
                            <span key={docIndex} className="t1-comments mb-2">
                              <i className="fa fa-download mr-2"></i>
                              <Link to={doc.link} target="_blank" download>
                                {doc.name}
                              </Link>
                            </span>
                            <br />
                          </>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

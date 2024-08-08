import React from 'react'

export const Settings = () => {
  const [activeTab, setActiveTab] = React.useState(null)
  return (
    <div className="trtui-row">
      <div className="trtui-col-12">
        <div className="trtui-card trtui-mt-xxl-n5">
          <div className="trtui-card-header">
            <ul
              className="trtui-nav trtui-nav-tabs-custom trtui-rounded trtui-card-header-tabs trtui-border-bottom-0"
              role="tablist"
            >
              <li className="trtui-nav-item" role="presentation">
                <span
                  className={`trtui-nav-link trtui-cursor-pointer ${activeTab === null ? 'trtui-active' : ''}`}
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  onClick={() => setActiveTab(null)}
                >
                  Theme & Page
                </span>
              </li>
              <li className="trtui-nav-item" role="presentation">
                <span
                  className={`trtui-nav-link trtui-cursor-pointer ${activeTab === 'sa' ? 'trtui-active' : ''}`}
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="true"
                  onClick={() => setActiveTab('sa')}
                >
                  Site & App
                </span>
              </li>
              <li className="trtui-nav-item" role="presentation">
                <span
                  className={`trtui-nav-link trtui-cursor-pointer ${activeTab === 'cp' ? 'trtui-active' : ''}`}
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                  onClick={() => setActiveTab('seo')}
                >
                  SEO
                </span>
              </li>
              <li className="trtui-nav-item" role="presentation">
                <span
                  className={`trtui-nav-link trtui-cursor-pointer ${activeTab === 'cl' ? 'trtui-active' : ''}`}
                  data-bs-toggle="tab"
                  role="tab"
                  aria-selected="false"
                  onClick={() => setActiveTab('cl')}
                >
                  Consent & Languages
                </span>
              </li>
            </ul>
          </div>
          <div className="trtui-card-body trtui-p-4">
            <div className="trtui-tab-content">
              <div
                className={`trtui-tab-pane ${activeTab === null ? 'trtui-active trtui-show' : ''}`}
                role="tabpanel"
              >
                <div className="trtui-row">
                  <div className="trtui-col-12">Theme & Page</div>
                </div>
              </div>
              <div
                className={`trtui-tab-pane ${activeTab === 'sa' ? 'trtui-active trtui-show' : ''}`}
                id="changePassword"
                role="tabpanel"
              >
                <div className="trtui-row">
                  <div className="trtui-col-12">Site & App</div>
                </div>
              </div>

              <div
                className={`trtui-tab-pane ${activeTab === 'seo' ? 'trtui-active trtui-show' : ''}`}
                id="experience"
                role="tabpanel"
              >
                <div className="trtui-row">
                  <div className="trtui-col-12">SEO</div>
                </div>
              </div>
              <div
                className={`trtui-tab-pane ${activeTab === 'cl' ? 'trtui-active trtui-show' : ''}`}
                id="experience"
                role="tabpanel"
              >
                <div className="trtui-row">
                  <div className="trtui-col-12">Consent & Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

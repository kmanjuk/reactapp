import React from 'react'
import PropTypes from 'prop-types'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Y from 'yup'

import { useUpdateCall } from '../../../lib/api/update'
import { useCreateCall } from '../../../lib/api/create'
import { useDeleteCall } from '../../../lib/api/delete'
import httpParams from '../../../lib/httpParams'
import { PBForm } from './pbForm'
import { ImageManager } from './imageManager'

export const PropertyBar = ({
  setShowPropBar,
  appVariables,
  compData,
  pageId,
  pageName,
  elemTypes,
  appSettings,
  webSettings,
}) => {
  const params = httpParams.adminOrgParams(appVariables)
  const updateCallMutation = useUpdateCall()
  const createCallMutation = useCreateCall()
  const deleteCallMutation = useDeleteCall()
  const [dataUpdate, setDataUpdate] = React.useState(false)
  const [accordPull, setAccordPull] = React.useState(null)
  const [updateValue, setUpdateValue] = React.useState(0)
  const [imageManage, setImageManage] = React.useState(false)
  const [activPill, setActivPill] = React.useState('components')

  const elementData = elemTypes

  const validation = Y.object().shape({
    elementTypeId: Y.string().required('Select element to add'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validation),
  })

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(validation),
  })

  if (elementData.isLoading) {
    return (
      <div id="infobar-notifications-sidebar" className="infobar-notifications-sidebar sidebarshow">
        <div className="infobar-notifications-sidebar-head d-flex w-100 justify-content-between">
          <h4>Properties</h4>
          <span
            onClick={() => setShowPropBar(false)}
            id="infobar-notifications-close"
            className="infobar-notifications-close"
          >
            <img
              src={require('../../../assets/images/svg-icon/close.svg').default}
              className="img-fluid menu-hamburger-close"
              alt="close"
            />
          </span>
        </div>
        <div className="infobar-notifications-sidebar-body">
          <div className="tab-content" id="infobar-pills-tabContent">
            <div
              className={`tab-pane fade ${activPill === 'components' && 'active show'}`}
              id="pills-messages"
              role="tabpanel"
              aria-labelledby="pills-messages-tab"
            >
              <ul className="list-unstyled">
                <li className="media">Loading...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const elementTypes = elementData.data?.formData && elementData.data?.formData,
    elementTypeSchema = webSettings['webSettings-contactForm'].componentSchema.elementSchema.filter(
      (f) => f.elementName === compData.className.className,
    )

  const childComp = elementTypes.filter((el) => {
    return elementTypeSchema[0]?.childItems.some((f) => {
      return f.elementName === el.elementTypeName && f.parent === null
    })
    //return elementTypeSchema[0]?.childItems
  })

  const getChildComp = (paren) => {
    const elementSchema = webSettings[
      'webSettings-contactForm'
    ].componentSchema.elementSchema.filter((f) => f.elementName === paren)
    console.log(elementSchema)
    return elementTypes.filter((el) => {
      return elementSchema[0].childItems.some((f) => {
        return (
          f.elementName === el.elementTypeName &&
          el.elementCSSLibraryName === 'UINEW' &&
          f.parent === null
        )
      })
    })
  }

  const deleteComp = async (key) => {
    await deleteCallMutation.mutateAsync({
      url: appVariables.REACT_APP_API_URL,
      apiEndpoint: 'PageElement',
      id: key.pageElementId,
      messageTitle: 'Page Element',
      parentAPI: 'pageData',
      message: 'Page element deleted successfully!',
      params,
    })
  }

  const getChildCompChild = (paren) => {
    return elementTypes.filter((el) => {
      return elementTypeSchema[0]?.childItems.some((f) => {
        return f.elementName === el.elementTypeName && f.parent === paren
      })
    })
  }

  const formSubmit = async (data) => {
    const formObject = {}
    formObject['elementTypeId'] = JSON.parse(data.elementTypeId).elementTypeId
    formObject['parentPageElementId'] = compData.pageElementId
    formObject['pageId'] = pageId
    formObject['pageElementName'] = JSON.parse(data.elementTypeId).elementTypeName
    formObject['appId'] = appVariables.REACT_APP_APP_ID
    formObject['tenantId'] = appVariables.REACT_APP_TENANT_ID
    formObject['pageElementDisplayOrder'] = 0

    await createCallMutation.mutateAsync({
      url: appVariables.REACT_APP_API_URL,
      apiEndpoint: 'PageElement',
      data: formObject,
      parentAPI: 'pageData',
      messageTitle: 'Page Element',
      message: 'Page element added',
      params: params + 'pageName=' + pageName,
      refetch: true,
    })
  }

  const formSubmitChild = async (data) => {
    const d1 = data.elementTypeId.split('&&')

    const parentId = JSON.parse(d1[0])
    const childId = JSON.parse(d1[1])
    const formObject = {}
    formObject['elementTypeId'] = childId.elementTypeId
    formObject['parentPageElementId'] = parentId.pageElementId
    formObject['pageId'] = pageId
    formObject['pageElementName'] = childId.elementTypeName
    formObject['appId'] = appVariables.REACT_APP_APP_ID
    formObject['tenantId'] = appVariables.REACT_APP_TENANT_ID
    formObject['pageElementDisplayOrder'] = 0

    await createCallMutation.mutateAsync({
      url: appVariables.REACT_APP_API_URL,
      apiEndpoint: 'PageElement',
      data: formObject,
      parentAPI: 'pageData',
      messageTitle: 'Page Element',
      message: 'Page element added',
      params: params + 'pageName=' + pageName,
      refetch: true,
    })
  }

  const updatePropertyValue = async (comp, e, key) => {
    setDataUpdate(!dataUpdate)
    e.preventDefault()

    var datas = new FormData(e.target)
    let formsObject = Object.fromEntries(datas.entries())
    const formObject = {}
    formObject['appId'] = appVariables.REACT_APP_APP_ID
    formObject['tenantId'] = appVariables.REACT_APP_TENANT_ID
    formObject['pageId'] = pageId
    formObject['elementTypePropertyId'] = comp[key].elementTypePropertyId
    formObject['pageElementPropertyId'] = comp[key].pageElementPropertyId
    formObject['pageElementId'] = comp.pageElementId
    formObject['pageElementPropertyValue'] = formsObject[key]

    await updateCallMutation
      .mutateAsync({
        url: appVariables.REACT_APP_API_URL,
        apiEndpoint: 'pageElementProperty',
        data: formObject, // data,
        id: comp[key].pageElementPropertyId,
        parentAPI: 'pageData',
        messageTitle: 'Page Data',
        message: 'Page data updated',
        refetch: true,
        params,
      })
      .then(() => setUpdateValue(updateValue + 1))
  }

  return (
    <div id="infobar-notifications-sidebar" className="infobar-notifications-sidebar sidebarshow">
      <div className="infobar-notifications-sidebar-head d-flex w-100 justify-content-between">
        <h4>
          Properties <small>{compData.className.className}</small>
        </h4>
        <span
          onClick={() => setShowPropBar(false)}
          id="infobar-notifications-close"
          className="infobar-notifications-close"
        >
          <img
            src={require('../../../assets/images/svg-icon/close.svg').default}
            className="img-fluid menu-hamburger-close"
            alt="close"
          />
        </span>
      </div>
      <div className="infobar-notifications-sidebar-body">
        <div className="tab-content" id="infobar-pills-tabContent">
          <div
            className={`tab-pane fade ${activPill === 'components' && 'active show'}`}
            id="pills-messages"
            role="tabpanel"
            aria-labelledby="pills-messages-tab"
          >
            <div className="row">
              <div className="col-12 mb-2">
                <button className="btn btn-primary btn-sm" onClick={() => setImageManage(true)}>
                  Images
                </button>
              </div>
              <div className="col-12">
                <PBForm
                  comp={compData}
                  updatePropertyValue={updatePropertyValue}
                  updateCallMutation={updateCallMutation}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {imageManage && (
        <ImageManager
          appVariables={appVariables}
          setImageManage={setImageManage}
          appSettings={appSettings}
        />
      )}
    </div>
  )
}

PropertyBar.propTypes = {
  pageData: PropTypes.object.isRequired,
}

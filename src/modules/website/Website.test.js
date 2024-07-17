import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Website } from './Website'
import { useGetPageCall, useGetSPAPageCall } from '../../lib/api/get'
import * as Web from './webcomps'
import { mainUILoad, unloadCSS } from '../../lib/uiHelper'

// Mocking dependencies
jest.mock('../../lib/api/get')
jest.mock('./webcomps', () => ({
  WebComponent1: () => <div>Web Component 1</div>,
  WebComponent2: () => <div>Web Component 2</div>
}))
jest.mock('../../lib/uiHelper', () => ({
  mainUILoad: jest.fn(),
  unloadCSS: jest.fn()
}))

const envData = {
  REACT_APP_PRIMARY_COLOR: '#000000',
  REACT_APP_SECONDARY_COLOR: '#FFFFFF',
  REACT_APP_THEME_FAVICON: '/favicon.ico',
  REACT_APP_THEME_COLOR: '#123456'
}

const appDataParsedDefault = {
  webSettings: {
    'webSettings-defaultTheme': 'default',
    'webSettings-defaultSPAPage': 'spaPage1',
    'webSettings-navbarComponent': 'WebComponent1',
    'webSettings-footerComponent': 'WebComponent2'
  }
}

const appDataParsedT1 = {
    webSettings: {
      'webSettings-defaultTheme': 'T1',
      'webSettings-defaultSPAPage': 'spaPage1',
      'webSettings-navbarComponent': 'WebComponent1',
      'webSettings-footerComponent': 'WebComponent2'
    }
  }

  const appDataParsedTheme1 = {
    webSettings: {
      'webSettings-defaultTheme': 'Theme1',
      'webSettings-defaultSPAPage': 'spaPage1',
      'webSettings-navbarComponent': 'WebComponent1',
      'webSettings-footerComponent': 'WebComponent2'
    }
  }

  const appDataParsedTheme2 = {
    webSettings: {
      'webSettings-defaultTheme': 'Theme2',
      'webSettings-defaultSPAPage': 'spaPage1',
      'webSettings-navbarComponent': 'WebComponent1',
      'webSettings-footerComponent': 'WebComponent2'
    }
  }

const routeData = {
  pageId: 'page1',
  name: 'Home',
  isSPA: true
}

const pageData = {
  formData: {
    pageData: JSON.stringify([
      {
        childItems: [
          {
            childItems: [
              {
                pageElementDisplayOrder: 1,
                className: { className: 'WebComponent1' }
              },
              {
                pageElementDisplayOrder: 2,
                className: { className: 'WebComponent2' }
              }
            ]
          }
        ]
      }
    ])
  }
}

const spaPageData = {
  formData: {
    pageData: JSON.stringify([
      {
        childItems: [
          {
            childItems: [
              {
                pageElementDisplayOrder: 1,
                className: { className: 'WebComponent2' }
              },
              {
                pageElementDisplayOrder: 2,
                className: { className: 'WebComponent2' }
              }
            ]
          }
        ]
      }
    ])
  }
}

describe('Website component', () => {
  beforeEach(() => {
    useGetPageCall.mockReturnValue({
      data: pageData,
      isLoading: false
    })
    useGetSPAPageCall.mockReturnValue({
      data: spaPageData,
      isLoading: false
    })
  })

  test('loads and unloads CSS on mount and unmount, theme=default', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedDefault}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
  })

  test('loads and unloads CSS on mount and unmount, theme=T1', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedT1}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
  })

  test('loads and unloads CSS on mount and unmount, theme=Theme1', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedTheme1}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
  })

  test('loads and unloads CSS on mount and unmount, theme=Theme2', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedTheme2}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
  })

  test('displays loading spinner when data is loading', () => {
    useGetPageCall.mockReturnValueOnce({
      data: null,
      isLoading: true
    })
    useGetSPAPageCall.mockReturnValueOnce({
      data: null,
      isLoading: true
    })

    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedDefault}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  test('renders components based on fetched data', async () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedDefault}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Web Component 1')).toBeInTheDocument()
      expect(screen.getByText('Web Component 2')).toBeInTheDocument()
    })
  })

  test('renders fallback content on error', async () => {
    useGetPageCall.mockReturnValueOnce({
      data: null,
      isLoading: false
    })
    useGetSPAPageCall.mockReturnValueOnce({
      data: null,
      isLoading: false
    })

    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedDefault}
        routeData={routeData}
        isLocalEnvironment="http://localhost"
      />
    )

    expect(screen.getByText('Something Went Wrong!')).toBeInTheDocument()
  })
})

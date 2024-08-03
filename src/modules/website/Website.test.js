import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Website } from './Website'
import { useGetPageCall, useGetSPAPageCall } from '../../lib/api/get'
import * as Web from './webcomps'
import { mainUILoad, unloadCSS, isValidJsonString } from '../../lib/uiHelper'

// Mocking dependencies
jest.mock('../../lib/api/get') 
jest.mock('./webcomps', () => ({
  WebComponent1: () => <div>Web Component 1</div>,
  WebComponent2: () => <div>Web Component 2</div>
}))
jest.mock('../../lib/uiHelper', () => ({
  mainUILoad: jest.fn(),
  unloadCSS: jest.fn(),
  isValidJsonString: jest.fn()
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

const authDetails = {
  "success": true,
  "message": "successful",
  "user": {
      "profile": {
          "id": "110857112988952486170",
          "displayName": "K Manju",
          "name": {
              "familyName": "Manju",
              "givenName": "K"
          },
          "emails": [
              {
                  "value": "k.manju.thulisha@gmail.com",
                  "verified": true
              }
          ],
          "photos": [
              {
                  "value": "https://lh3.googleusercontent.com/a/ACg8ocKHOOPvHHuI45jGQ6KzFvz5xtw-LjgAzTopo5_oOlVZpobAzw=s96-c"
              }
          ],
          "provider": "google",
          "_raw": "{\n  \"sub\": \"110857112988952486170\",\n  \"name\": \"K Manju\",\n  \"given_name\": \"K\",\n  \"family_name\": \"Manju\",\n  \"picture\": \"https://lh3.googleusercontent.com/a/ACg8ocKHOOPvHHuI45jGQ6KzFvz5xtw-LjgAzTopo5_oOlVZpobAzw\\u003ds96-c\",\n  \"email\": \"k.manju.thulisha@gmail.com\",\n  \"email_verified\": true\n}",
          "_json": {
              "sub": "110857112988952486170",
              "name": "K Manju",
              "given_name": "K",
              "family_name": "Manju",
              "picture": "https://lh3.googleusercontent.com/a/ACg8ocKHOOPvHHuI45jGQ6KzFvz5xtw-LjgAzTopo5_oOlVZpobAzw=s96-c",
              "email": "k.manju.thulisha@gmail.com",
              "email_verified": true
          }
      }
  },
  "tokenObject": "eyJwYXNzcG9ydCI6eyJ1c2VyIjp7InByb2ZpbGUiOnsiaWQiOiIxMTA4NTcxMTI5ODg5NTI0ODYxNzAiLCJkaXNwbGF5TmFtZSI6IksgTWFuanUiLCJuYW1lIjp7ImZhbWlseU5hbWUiOiJNYW5qdSIsImdpdmVuTmFtZSI6IksifSwiZW1haWxzIjpbeyJ2YWx1ZSI6ImsubWFuanUudGh1bGlzaGFAZ21haWwuY29tIiwidmVyaWZpZWQiOnRydWV9XSwicGhvdG9zIjpbeyJ2YWx1ZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tIT09QdkhIdUk0NWpHUTZLekZ2ejV4dHctTGpnQXpUb3BvNV9vT2xWWnBvYkF6dz1zOTYtYyJ9XSwicHJvdmlkZXIiOiJnb29nbGUiLCJfcmF3Ijoie1xuICBcInN1YlwiOiBcIjExMDg1NzExMjk4ODk1MjQ4NjE3MFwiLFxuICBcIm5hbWVcIjogXCJLIE1hbmp1XCIsXG4gIFwiZ2l2ZW5fbmFtZVwiOiBcIktcIixcbiAgXCJmYW1pbHlfbmFtZVwiOiBcIk1hbmp1XCIsXG4gIFwicGljdHVyZVwiOiBcImh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0tIT09QdkhIdUk0NWpHUTZLekZ2ejV4dHctTGpnQXpUb3BvNV9vT2xWWnBvYkF6d1xcdTAwM2RzOTYtY1wiLFxuICBcImVtYWlsXCI6IFwiay5tYW5qdS50aHVsaXNoYUBnbWFpbC5jb21cIixcbiAgXCJlbWFpbF92ZXJpZmllZFwiOiB0cnVlXG59IiwiX2pzb24iOnsic3ViIjoiMTEwODU3MTEyOTg4OTUyNDg2MTcwIiwibmFtZSI6IksgTWFuanUiLCJnaXZlbl9uYW1lIjoiSyIsImZhbWlseV9uYW1lIjoiTWFuanUiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jS0hPT1B2SEh1STQ1akdRNkt6RnZ6NXh0dy1MamdBelRvcG81X29PbFZacG9iQXp3PXM5Ni1jIiwiZW1haWwiOiJrLm1hbmp1LnRodWxpc2hhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfX19fSwiaWF0IjoxNzIxNzMzNDMzLCJleHAiOjE3MjE3NDA2MzN9"
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
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
    expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
  })

  test('loads and unloads CSS on mount and unmount, theme=T1', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedT1}
        routeData={routeData}
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
    expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
  })

  test('loads and unloads CSS on mount and unmount, theme=Theme1', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedTheme1}
        routeData={routeData}
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
    expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
  })

  test('loads and unloads CSS on mount and unmount, theme=Theme2', () => {
    render(
      <Website
        envData={envData}
        appDataParsed={appDataParsedTheme2}
        routeData={routeData}
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    expect(unloadCSS).toHaveBeenCalled()
    expect(mainUILoad).toHaveBeenCalledWith(
      envData.REACT_APP_PRIMARY_COLOR,
      envData.REACT_APP_SECONDARY_COLOR,
      envData.REACT_APP_THEME_FAVICON
    )
    expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
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
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
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
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    await waitFor(() => {
      expect(screen.getByText('Web Component 1')).toBeInTheDocument()
      expect(screen.getByText('Web Component 2')).toBeInTheDocument()
      expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
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
        isLocalEnvironment="http://localhost:3001"
        authDetails={authDetails}
      />
    )

    expect(screen.getByText('Something Went Wrong!')).toBeInTheDocument()
    expect(isValidJsonString).toHaveBeenCalledWith(authDetails)
  })
})

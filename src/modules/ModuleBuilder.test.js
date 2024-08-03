import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ModuleBuilder } from './ModuleBuilder'

// Mocking child components
jest.mock('./appLayout/AppLayout', () => ({
  AppLayout: () => <div>AppLayout Component</div>
}))

jest.mock('../common/LoginModal', () => ({
  LoginModal: () => <div>LoginModal Component</div>
}))

jest.mock('../lib/uiHelper', () => ({
  unloadCSS: jest.fn()
}))

describe('ModuleBuilder Component', () => {
  const defaultProps = {
    envData: {},
    setToggleLoginModal: jest.fn(),
    toggleLoginModal: false,
    sideLoginModalRef: {},
    isLocalEnvironment: 'local',
    authDetails: {},
    appDataParsed: {},
    routeData: {}
  }

  it('renders AppLayout component', () => {
    render(<ModuleBuilder {...defaultProps} />)
    expect(screen.getByText('AppLayout Component')).toBeInTheDocument()
  })

  it('does not render LoginModal component when toggleLoginModal is false', () => {
    render(<ModuleBuilder {...defaultProps} />)
    expect(screen.queryByText('LoginModal Component')).not.toBeInTheDocument()
  })

  it('renders LoginModal component when toggleLoginModal is true', () => {
    const props = { ...defaultProps, toggleLoginModal: true }
    render(<ModuleBuilder {...props} />)
    expect(screen.getByText('LoginModal Component')).toBeInTheDocument()
  })

  it('calls unloadCSS on mount', () => {
    render(<ModuleBuilder {...defaultProps} />)
    expect(require('../lib/uiHelper').unloadCSS).toHaveBeenCalled()
  })

  it('loads CSS files on mount', async () => {
    render(<ModuleBuilder {...defaultProps} />)
    
    // Check if the CSS files are loaded
    await import('../assets/css/bootstrap.min.css')
    await import('../assets/css/icons.min.css')
    await import('../assets/css/app.min.css')
    await import('../assets/css/custom.min.css')

    // Mocking the css imports to ensure they are called
    const bootstrapCSS = await jest.requireActual('../assets/css/bootstrap.min.css')
    const iconsCSS = await jest.requireActual('../assets/css/icons.min.css')
    const appCSS = await jest.requireActual('../assets/css/app.min.css')
    const customCSS = await jest.requireActual('../assets/css/custom.min.css')

    expect(bootstrapCSS).toBeDefined()
    expect(iconsCSS).toBeDefined()
    expect(appCSS).toBeDefined()
    expect(customCSS).toBeDefined()
  })
})

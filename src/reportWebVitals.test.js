import reportWebVitals from './reportWebVitals'

jest.mock('web-vitals', () => ({
  getCLS: jest.fn(),
  getFID: jest.fn(),
  getFCP: jest.fn(),
  getLCP: jest.fn(),
  getTTFB: jest.fn(),
}))

describe('reportWebVitals', () => {
  const { getCLS, getFID, getFCP, getLCP, getTTFB } = require('web-vitals')

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('calls performance metrics functions with onPerfEntry callback', async () => {
    const mockOnPerfEntry = jest.fn()

    await reportWebVitals(mockOnPerfEntry)

    expect(getCLS).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(getFID).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(getFCP).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(getLCP).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(getTTFB).toHaveBeenCalledWith(mockOnPerfEntry)
  })

  test('does not call performance metrics functions if onPerfEntry is not a function', async () => {
    await reportWebVitals(null)
    await reportWebVitals({})
    await reportWebVitals('not a function')

    expect(getCLS).not.toHaveBeenCalled()
    expect(getFID).not.toHaveBeenCalled()
    expect(getFCP).not.toHaveBeenCalled()
    expect(getLCP).not.toHaveBeenCalled()
    expect(getTTFB).not.toHaveBeenCalled()
  })
})

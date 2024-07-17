import reportWebVitals from './reportWebVitals'

describe('reportWebVitals', () => {
  let mockOnPerfEntry

  beforeEach(() => {
    mockOnPerfEntry = jest.fn()
  })

  test('calls web-vitals functions when onPerfEntry is provided', async () => {
    // Mock the web-vitals module and its functions
    const mockGetCLS = jest.fn()
    const mockGetFID = jest.fn()
    const mockGetFCP = jest.fn()
    const mockGetLCP = jest.fn()
    const mockGetTTFB = jest.fn()

    jest.mock('web-vitals', () => ({
      getCLS: mockGetCLS,
      getFID: mockGetFID,
      getFCP: mockGetFCP,
      getLCP: mockGetLCP,
      getTTFB: mockGetTTFB,
    }))

    // Call the reportWebVitals function
    reportWebVitals(mockOnPerfEntry)

    // Wait for the dynamic import to resolve
    await new Promise(setImmediate)

    // Verify that the web-vitals functions were called with the onPerfEntry callback
    expect(mockGetCLS).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(mockGetFID).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(mockGetFCP).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(mockGetLCP).toHaveBeenCalledWith(mockOnPerfEntry)
    expect(mockGetTTFB).toHaveBeenCalledWith(mockOnPerfEntry)
  })

  test('does not call web-vitals functions when onPerfEntry is not provided', async () => {
    // Call the reportWebVitals function without a callback
    reportWebVitals()

    // Wait for the dynamic import to resolve
    await new Promise(setImmediate)

    // Verify that the web-vitals functions were not called
    expect(mockOnPerfEntry).not.toHaveBeenCalled()
  })

  test('does not call web-vitals functions when onPerfEntry is not a function', async () => {
    // Call the reportWebVitals function with a non-function argument
    reportWebVitals('not a function')

    // Wait for the dynamic import to resolve
    await new Promise(setImmediate)

    // Verify that the web-vitals functions were not called
    expect(mockOnPerfEntry).not.toHaveBeenCalled()
  })
})

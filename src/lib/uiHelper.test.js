import { mainUILoad, unloadCSS, isValidJsonString } from './uiHelper'
import { convCol } from './css-filter'

jest.mock('./css-filter', () => ({
  convCol: jest.fn()
}))

describe('uiHelper functions', () => {
  beforeEach(() => {
    document.documentElement.style.setProperty = jest.fn()
    document.body.classList.add = jest.fn()
    const link = document.createElement('link')
    link.id = 'faviconLink'
    document.head.appendChild(link)
  })

  afterEach(() => {
    document.documentElement.style.setProperty.mockReset()
    document.body.classList.add.mockReset()
    document.head.innerHTML = ''
  })

  describe('mainUILoad', () => {
    it('should set theme colors and favicon', () => {
      convCol.mockReturnValueOnce('filter1').mockReturnValueOnce('filter2')

      mainUILoad('#123456', '#654321', 'favicon.ico')

      expect(document.body.classList.add).toHaveBeenCalledWith('vertical-layout')
      expect(document.getElementById('faviconLink').getAttribute('href')).toBe('favicon.ico')
      expect(convCol).toHaveBeenCalledWith('#654321')
      expect(convCol).toHaveBeenCalledWith('#123456')
      expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--mainPrimaryCol', '#123456')
      expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--mainPrimaryColHover', '#123456')
      expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--primaryCol', 'filter1')
      expect(document.documentElement.style.setProperty).toHaveBeenCalledWith('--primaryCol-hover', 'filter2')
    })
  })

  describe('unloadCSS', () => {
    it('should unload all CSS files', () => {
      const link1 = document.createElement('link')
      link1.type = 'text/css'
      const link2 = document.createElement('link')
      link2.type = 'text/css'
      document.head.appendChild(link1)
      document.head.appendChild(link2)

      unloadCSS()

      expect(document.querySelectorAll('link[type="text/css"]').length).toBe(0)
    })
  })

  describe('isValidJsonString', () => {
    it('should return true for valid JSON string', () => {
      const jsonString = '{"name": "John", "age": 30}'
      expect(isValidJsonString(jsonString)).toBe(true)
    })

    it('should return false for invalid JSON string', () => {
      const invalidJsonString = '{"name": "John", "age": 30'
      expect(isValidJsonString(invalidJsonString)).toBe(false)
    })
  })
})

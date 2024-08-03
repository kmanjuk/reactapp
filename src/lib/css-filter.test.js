import { convCol } from './css-filter'  // Adjust the import according to your file structure

describe('convCol', () => {
  it('should convert hex color #000000 to CSS filter', () => {
    const result = convCol('#000000')
    expect(result).toBe('invert(100%) sepia(0%) saturate(7500%) hue-rotate(0deg) brightness(0%) contrast(100%)')
  })

  it('should convert hex color #ffffff to CSS filter', () => {
    const result = convCol('#ffffff')
    expect(result).toBe('invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)')
  })

  it('should convert hex color #ff0000 to CSS filter', () => {
    const result = convCol('#ff0000')
    expect(result).toBe('invert(50%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)')
  })

  it('should convert hex color #00ff00 to CSS filter', () => {
    const result = convCol('#00ff00')
    expect(result).toBe('invert(50%) sepia(100%) saturate(0%) hue-rotate(120deg) brightness(100%) contrast(100%)')
  })

  it('should convert hex color #0000ff to CSS filter', () => {
    const result = convCol('#0000ff')
    expect(result).toBe('invert(50%) sepia(100%) saturate(0%) hue-rotate(240deg) brightness(100%) contrast(100%)')
  })

  it('should return undefined for invalid hex color', () => {
    const result = convCol('#xyz')
    expect(result).toBeUndefined()
  })
})

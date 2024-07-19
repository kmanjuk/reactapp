const { Color, Solver, convCol, hexToRgb } = require('./colorSolver'); // Adjust import based on your file structure

describe('Color Class Tests', () => {
  let color;

  beforeEach(() => {
    color = new Color(255, 0, 0); // Red color for testing
  });

  test('toString method should return RGB string', () => {
    expect(color.toString()).toBe('rgb(255, 0, 0)');
  });

  test('set method should correctly set RGB values', () => {
    color.set(100, 200, 50);
    expect(color.r).toBe(100);
    expect(color.g).toBe(200);
    expect(color.b).toBe(50);
  });

  test('hueRotate method should rotate hue by specified angle', () => {
    color.hueRotate(180);
    expect(color.toString()).toBe('rgb(0, 255, 255)'); // Expecting cyan after 180 degree hue rotation
  });

  test('grayscale method should convert color to grayscale', () => {
    color.grayscale();
    expect(color.toString()).toBe('rgb(77, 77, 77)'); // Example grayscale value of red
  });

  test('sepia method should apply sepia effect', () => {
    color.sepia();
    expect(color.toString()).toBe('rgb(188, 152, 119)'); // Example sepia value of red
  });

  test('saturate method should increase color saturation', () => {
    color.saturate(2); // Double the saturation
    expect(color.toString()).toBe('rgb(255, 0, 0)'); // Should remain red as saturation increases
  });

  test('multiply method should multiply color components by matrix', () => {
    color.multiply([
      1.2, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
    expect(color.toString()).toBe('rgb(255, 0, 0)'); // No change expected with identity matrix
  });

  test('brightness method should adjust brightness', () => {
    color.brightness(1.5); // Increase brightness
    expect(color.toString()).toBe('rgb(255, 0, 0)'); // Should remain red as brightness increases
  });

  test('contrast method should adjust contrast', () => {
    color.contrast(1.5); // Increase contrast
    expect(color.toString()).toBe('rgb(255, 0, 0)'); // Should remain red as contrast increases
  });

  test('invert method should invert color', () => {
    color.invert();
    expect(color.toString()).toBe('rgb(0, 255, 255)'); // Expecting cyan after inversion of red
  });

  test('clamp method should constrain color values within 0-255 range', () => {
    color.set(300, -100, 500); // Values out of range
    expect(color.r).toBe(255); // Expected to be clamped to 255
    expect(color.g).toBe(0); // Expected to be clamped to 0
    expect(color.b).toBe(255); // Expected to be clamped to 255
  });

  test('hsl method should return correct HSL values', () => {
    const hsl = color.hsl();
    expect(hsl.h).toBeCloseTo(0); // Red hue
    expect(hsl.s).toBe(100); // Full saturation
    expect(hsl.l).toBeCloseTo(50); // Approximately 50% lightness for full red
  });
});

describe('Solver Class Tests', () => {
  let solver;

  beforeEach(() => {
    const targetColor = new Color(255, 0, 0); // Red color for testing
    solver = new Solver(targetColor);
  });

  test('solve method should return correct filter CSS', () => {
    const result = solver.solve();
    expect(result.filter).toContain('invert'); // Expecting CSS filter to contain 'invert'
  });

  test('solveWide method should return correct values', () => {
    const result = solver.solveWide();
    expect(result.loss).toBeGreaterThan(0); // Expecting loss value greater than 0
  });

  test('solveNarrow method should return correct values', () => {
    const wideResult = solver.solveWide();
    const result = solver.solveNarrow(wideResult);
    expect(result.loss).toBeGreaterThan(0); // Expecting loss value greater than 0
  });

  test('spsa method should return correct values', () => {
    const A = 5, a = [60, 180, 18000, 600, 1.2, 1.2], c = 15, values = [50, 20, 3750, 50, 100, 100], iters = 100;
    const result = solver.spsa(A, a, c, values, iters);
    expect(result.loss).toBeGreaterThan(0); // Expecting loss value greater than 0
  });

  test('loss method should return correct loss value', () => {
    const filters = [50, 20, 3750, 50, 100, 100];
    const loss = solver.loss(filters);
    expect(loss).toBeGreaterThan(0); // Expecting loss value greater than 0
  });

  test('css method should return correct CSS filter string', () => {
    const filters = [50, 20, 3750, 50, 100, 100];
    const css = solver.css(filters);
    expect(css).toContain('invert'); // Expecting CSS filter to contain 'invert'
  });
});

describe('Utility Functions Tests', () => {
  test('hexToRgb function should convert hex string to RGB array', () => {
    const rgb = hexToRgb('#ff0000');
    expect(rgb).toEqual([255, 0, 0]); // Expecting [255, 0, 0] for hex color #ff0000 (red)
  });

  test('convCol function should return correct CSS filter string for hex color', () => {
    const cssFilter = convCol('#ff0000');
    expect(cssFilter).toContain('invert'); // Expecting CSS filter to contain 'invert' for red color
  });
});

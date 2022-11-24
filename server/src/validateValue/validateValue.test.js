const validateValue = require('./validateValue.js');

describe('validateValue', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true);
  })
  test('Less correct', () => {
    expect(validateValue(-1)).toBe(false);
  })
  test('More than correct', () => {
    expect(validateValue(101)).toBe(false);
  })
});

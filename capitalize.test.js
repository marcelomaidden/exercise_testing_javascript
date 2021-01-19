const capitalize = require('./capitalize');

test('Capitalize a string', () => {
  expect(capitalize('marcelo')).toBe('Marcelo');
});

test('Verify if input is a string', () => {
  expect(capitalize(1)).toBe('Only strings are allowed');
});

test('Verify if input is empty', () => {
  expect(capitalize('')).toBe('String length should be at least 1');
});

test('Capitalize a unique character', () => {
  expect(capitalize('a')).toBe('A');
});

test('Return error if a object is passed', () => {
  expect(capitalize({ name: 'marcelo' })).toBe('Only strings are allowed');
});

test('Verify if an all capital string is converted first character capitalized', () => {
  expect(capitalize('MARCELO')).toBe('Marcelo');
});

const calculator = require('./calculator');

test('Verify sum of two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Verify if user entered more than two numbers', () => {
  expect(calculator.add(1)).toBe('Invalid input');
});

test('Verify sum of more than two numbers', () => {
  expect(calculator.add(1, 2, 3, 4)).toBe(10);
});

test('Valid input', () => {
  expect(calculator.add('a')).toBe('Invalid input');
});

test('Verify subtraction of numbers', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('Verify subtraction of more than two numbers', () => {
  expect(calculator.subtract(10, 1, 2)).toBe(7);
});

test('Verify division of numbers', () => {
  expect(calculator.divide(2, 1)).toBe(2);
});

test('Verify division by 0', () => {
  expect(calculator.divide(2, 0)).toBe('Impossible to divide by zero');
});

test('Verify if the first number of the division is 0', () => {
  expect(calculator.divide(0, 2)).toBe(0);
});

test('Verify multiplication of numbers', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
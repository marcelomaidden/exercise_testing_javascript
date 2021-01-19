const { TestScheduler } = require("jest");

test('Verify sum of numbers', () => {
  expect(add(1, 2)).toBe(3)
});

test('Verify subtraction of numbers', () => {
  expect(subtract(1, 2)).toBe(-1)
});

test('Verify division of numbers', () => {
  expect(sum(2,1)).toBe(2)
});

test('Verify multiplication of numbers', () => {
  expect(multiply(1, 2)).toBe(2)
});
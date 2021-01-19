const capitalize = require('./capitalize');

test('Capitalize a string', () => {
  expect(capitalize("marcelo")).toBe("Marcelo");
});

test('Verify if input is a string', () => {
  expect(capitalize(1)).toBe("only strings are allowed");
})
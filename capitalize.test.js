const capitalize = require('./capitalize');

test('Capitalize a string', () => {
  expect(capitalize("marcelo")).toBe("Marcelo");
});
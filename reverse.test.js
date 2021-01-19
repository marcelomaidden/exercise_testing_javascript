const { TestScheduler } = require('jest');
const reverseString = require('./reverse');

test("Reverse a string", () => {
  expect(reverseString("marcelo")).toBe("olecram");
})

test("Test if user entered an empty string", () => {
  expect(reverseString("")).toBe("You entered an empty string");
})

test("Test if input is valid", () => {
  expect(reverseString(1)).toBe("Enter a valid string");
})
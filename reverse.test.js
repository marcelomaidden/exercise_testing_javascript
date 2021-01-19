const { TestScheduler } = require('jest');
const reverseString = require('./reverse');

test("Reverse a string", () => {
  expect(reverseString("marcelo")).toBe("olecram");
})
const { valleys } = require("../stepsUpDown");

test('on input "DDUUDDUU" valleys to be 2', () => {
  expect(valleys(12345678, "DDUUDDUU")).toBe(2);
});

test('on input "UUUDDDUDDU" valleys to be 1', () => {
  expect(valleys(12345678, "UUUDDDUDDU")).toBe(1);
});
test('on input "UDDDUDUU" valleys to be 1', () => {
  expect(valleys(8, "UDDDUDUU")).toBe(1);
});
test('on input "DDUUDDUDUUUD" valleys to be 1', () => {
  expect(valleys(12, "DDUUDDUDUUUD")).toBe(2);
});

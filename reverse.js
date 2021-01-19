const reverseString = (string) => {
  if (typeof (string) !== 'string') return 'Enter a valid string';
  if (string.trim() === '') return 'You entered an empty string';

  let reversed = '';
  let count = string.length - 1;
  while (count >= 0) {
    reversed += string[count];
    count -= 1;
  }
  return reversed;
};

module.exports = reverseString;
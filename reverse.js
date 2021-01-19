const reverseString = (string) => {
  let reversed = "";
  let count = string.length - 1
  while (count >= 0) {
    reversed += string[count]
    count -= 1
  }
  return reversed
}

module.exports = reverseString
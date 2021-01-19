const checkValidInput = (numbers) => {  
  return numbers.every(num => Number(num) === num)
}

const checkLength = (numbers) => {
  return numbers.length > 1
}

const checkZero = (numbers) => {
  if (numbers[0] === 0)
    return false
  return numbers.some(num => num === 0)
}

exports.add = (...numbers) => {
  if (!checkValidInput(numbers) || !checkLength(numbers))
    return 'Invalid input'
  return numbers.reduce((ac, num) => ac + num)
}

exports.divide = (...numbers) => {
  if (!checkValidInput(numbers) || !checkLength(numbers))
    return 'Invalid input'
  else if (checkZero(numbers))
    return 'Impossible to divide by zero'

  return numbers.reduce((acc, num) => acc / num)
}

exports.multiply = (...numbers) => {
  if (!checkValidInput(numbers) || !checkLength(numbers))
    return 'Invalid input'
  return numbers.reduce((acc, num) => acc * num);
}

exports.subtract = (...numbers) => {
  if (!checkValidInput(numbers) || !checkLength(numbers))
    return 'Invalid input'
  return numbers.reduce((acc, num) => acc - num);
}

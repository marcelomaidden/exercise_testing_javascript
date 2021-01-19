const capitalize = (string) => {
  if (typeof(string) !== 'string')
    return "Only strings are allowed"
  else if (string.trim() === '')
    return "String length should be at least 1"
  else
  {
    string = string.toLocaleLowerCase();
    return string[0].toUpperCase() + string.slice(1)  
  }    
}

module.exports = capitalize
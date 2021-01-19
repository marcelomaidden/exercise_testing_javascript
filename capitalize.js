const capitalize = (string) => {
  if (typeof(string) !== 'string')
    return "only strings are allowed"
  else
    return string[0].toUpperCase() + string.slice(1)  
}

module.exports = capitalize
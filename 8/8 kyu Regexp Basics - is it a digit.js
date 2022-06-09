// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.


String.prototype.digit = function(n) {
  console.log(this)
return /^\d$/.test(this)


};
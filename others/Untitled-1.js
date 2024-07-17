
// Write a function that, given an int and a string, rotates the characters of the string n times and returns the new string. Ex:
//  f(3, 'abcdef') => 'defabc'
//    2, 'abcdef' => 'cdefab'
//  abcdef -> bcdefa -> cdefab -> defabc

// Write a function that, given a string of parentheses, consisting of opening and closing parentheses, determines whether the parentheses are balanced. For example, the string "((()))" is balanced, while the string "(()" is not

// ()()
// (()())

function rotateString(n, str) {

  let rotation = n %= str.length
  let front = str.substring(rotation, str.length)

  let back = str.substring(0, rotation)
  return front + back

}
rotateString(6, "Hello") // lloHe


function rotateStringFwd(n, str) {

  let rotation = n %= str.length

  return str.slice(-rotation) + str.slice(0, -rotation)

}

console.log(rotateStringFwd(2, "JumpBall"))


function isValid(paren) {

  if (paren[0] !== "(" || paren[paren.length - 1] !== ")") return false

  let open=0
  for (char of paren) {
    if(char =="("){
      open++
    }else{
      open--
    }
    if(open<0) return false
  }

  return open===0

}

console.log(isValid("(())")) // true
console.log(isValid("((())")) // false

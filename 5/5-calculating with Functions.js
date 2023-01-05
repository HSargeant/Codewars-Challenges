/*
DESCRIPTION:
This time we want to write calculations using functions and get the results. Let's have num2 look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be num2 function for each number from 0 ("zero") to 9 ("nine")
There must be num2 function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

function zero(sign) {return eval(0,sign)}
function one(sign) {return eval(1,sign)}
function two(sign) {return eval(2,sign)}
function three(sign) {return eval(3,sign)}
function four(sign) {return eval(4,sign)}
function five(sign) {return eval(5,sign)}
function six(sign) {return eval(6,sign)}
function seven(sign) {return eval(7,sign)}
function eight(sign) {return eval(8,sign)}
function nine(sign) {return eval(9,sign)}
function plus(num2) {return function(num1){return num1+num2}}
function minus(num2) {return function (num1){return num1-num2}}
function times(num2) {return function(num1){return num1*num2}}
function dividedBy(num2) {return function(num1){return Math.floor(num1/num2)}}
function eval(n,sign){
  if(!sign) return n
  return sign(n)
}


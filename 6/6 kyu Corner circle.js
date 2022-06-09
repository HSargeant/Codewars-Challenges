// Corner circle
// A circle with radius r is placed in a right angled corner, where r is an integer and ≥ 1.

// circles
// What is the radius of the smaller circle, rounded to two decimal places?


//solution

function cornerCircle(r) {
  //quick math !
return Number((r*(Math.sqrt(2)-1)/(Math.sqrt(2)+1)).toFixed(2))
}
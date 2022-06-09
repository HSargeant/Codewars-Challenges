// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


//solution

function pillars(num_pill, dist, width) {

dist=dist*100 //convert distance to cm
  
let distanceBtwn= (num_pill-1)*dist // number of spaces between pillars to add 
  
if(num_pill ==1){
  return 0
}else return  distanceBtwn+width*(num_pill-2) //distanceBtwn + total width less first and last

}
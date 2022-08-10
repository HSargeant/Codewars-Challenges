function find_average(arr) {
  return arr.length ? (arr.reduce((a,c)=>a+c,0))/arr.length:0
}
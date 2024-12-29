/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

let q = []

for (let [x, y] of points) {
    let sum = x ** 2 + y ** 2; 
    let curr = Math.sqrt(sum); 
    q.push({ val: curr, points: [x, y] })
}
q.sort((a,b)=>a.val-b.val)

return q.slice(0,k).map(x=>x.points)

};
// 973. K Closest Points to Origin
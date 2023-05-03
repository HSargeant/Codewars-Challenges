var average = function(salary) {
    let sum = salary.reduce((a,c)=>a+c,0)
    sum-=Math.max(...salary)
    sum-=Math.min(...salary)
    return sum/(salary.length-2)
};
// 1491. Average Salary Excluding the Minimum and Maximum Salary
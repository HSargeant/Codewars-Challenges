/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
function sortPeople(names, heights) {
    return names.map((name,i)=>[name,heights[i]]).sort((a,b)=>b[1]-a[1]).map(people=>people[0])
};
// 2418. Sort the People
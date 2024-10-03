/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b)
    let boats = 0
    let i = 0, j = people.length - 1
    while (i <= j) {
        let l = people[i], r = people[j]
        if ((l + r) <= limit) {
            i++
        }
        j--
        boats++
    }
    return boats
};
// 881. Boats to Save People
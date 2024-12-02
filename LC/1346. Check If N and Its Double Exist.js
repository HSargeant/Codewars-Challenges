
function checkIfExist(arr) {
    let set = new Set()
    for (let num of arr) {
        if (set.has(num * 2) || set.has(num / 2)) return true
        set.add(num)
    }
    return false
};
// 1346. Check If N and Its Double Exist
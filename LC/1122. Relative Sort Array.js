var relativeSortArray = function (arr1, arr2) {
    let o = {}, res = [], rest = []
    for (let elem of arr1) {
        o[elem] = o[elem] + 1 || 1
    }

    for (let elem of arr2) {
        for (i = 0; i < o[elem] || 0; i++) {
            res.push(elem)
        }
    }
    o={}
    for (let elem of arr2) {
        o[elem] = o[elem] + 1 || 1
    }
    for(let elem of arr1){
       if(o[elem]==undefined) rest.push(elem)
    }
    rest.sort((a,b)=>a-b)

    return res.concat(rest)
};
// 1122. Relative Sort Arrayiuu
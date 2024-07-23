function edgeScore(edges) {
    let o = {}
    for (let i in edges) {
        let curr = edges[i]
        o[curr] = o[curr] + +i || +i
    }
    return Object.entries(o).sort((a,b)=>b[1]-a[1])[0][0]
};
// 2374. Node With Highest Edge Score
var canFinish = function(numCourses, pre) {
    let pmap={}
    for(let elem of pre){
        if(pmap[elem[0]]){
            pmap[elem[0]].push(elem[1])
        }else{
            pmap[elem[0]]=[elem[1]]
        }
    }
    let visited= new Set()
    const dfs=(e)=>{
        if(visited.has(e)) return false
        if(!pmap[e]?.length) return true
        visited.add(e)
        for(let elem of pmap[e]){
            let can = dfs(elem)
            if(!can) return false
        }
        visited.delete(e)
        pmap[e]=[]
        return true
    }
    for(let i=0; i<numCourses; i++){
        if(!dfs(i)) return false
    }
    return true
};
// 207. Course Schedule
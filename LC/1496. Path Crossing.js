const move=(s,o)=>{
    if(s=="N"){
        o.y+=1
        return
    }
    if(s=="S"){
        o.y-=1
        return
    }
    if(s=="E"){
        o.x+=1
        return
    }
    if(s=="W"){
        o.x-=1
        return
    }
}
const isPathCrossing = (path)=> {
    let pos = {"x":0,"y":0}
    let set = new Set()
    set.add("0,0")
    for (elem of path){
        move(elem,pos)
        if(set.has(`${pos.x},${pos.y}`)) return true
        set.add(`${pos.x},${pos.y}`)
    }
    return false
};
// 1496. Path Crossing

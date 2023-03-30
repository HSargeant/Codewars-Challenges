var getKth = function(lo, hi, k) {
    let arr=[]
    for(let i = lo; i<=hi; i++){
        arr.push(i)
    }
    return arr.sort((a,b)=>powerVal(a)-powerVal(b))[k-1]
};
let o={}
function powerVal(x){
    let temp = x
    if(o[x]) return o[x]
    let count=0
    while(x!=1){
        if(o[x]){
            count+=o[x]
            break
        }
        count++
        if(x%2==0){
            x/=2
        }else x=(3*x+1)
    }
    o[temp]=count
    return count
}
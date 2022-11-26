
// brute force
function stairs(n,a=[1,2]){
    let count=0
    const dfs=(i=0,temp=0)=>{
        if(temp==n){
            count++
            return
        }
        if(i>=a.length || temp>n) return
        for(i=0; i<a.length; i++){
            dfs(i,temp+a[i])
        }
    }
    dfs()
    return count
}

// console.log(stairs(3))
// console.log(stairs(4))

// memoization
// cache to reduce recursive calls
const stairs2=(n)=>{
    if(n<=2) return n
    const dfs=(n,o={})=>{
        if(n==0) return 1
        if(n<0) return 0
        if(o[n]) return o[n]
        o[n]=dfs(n-1,o)+dfs(n-2,o)
        return o[n]
    }
    let o={}
    return dfs(n,o)
}

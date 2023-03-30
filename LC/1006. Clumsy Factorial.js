var clumsy = function(n) {
let res = []
    let ops = ['*', '/', '+', '-']
    let i = 0

    while(n!=0){
        if(res[res.length-1]=='/'){
            res.pop()
            let num = Math.floor(res.pop() / n)
            res.push(num)
            n--
            if(n!=0){
                res.push(ops[i])
                i=(i+1)%4
            }
        }else if(res[res.length-1]=='*'){
            res.pop()
            let num = res.pop() * n
            res.push(num)
            n--
            if(n!=0){
                res.push(ops[i])
                i=(i+1)%4
            }
        }else{
            res.push(n)
            n--
            if(n!=0){
                res.push(ops[i])
                i=(i+1)%4
            }
        }
    }
    return eval(res.join(""))
};
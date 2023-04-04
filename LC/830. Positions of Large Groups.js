var largeGroupPositions = function(s) {
    if(s.length<3) return []
    let start=0,prev=s[0],res=[]
    for(let i=1; i<s.length; i++){
        if(s[i]!==prev){
            if(i-start>2){
                res.push([start,i-1])
            }
            start=i
            prev=s[i]
        }else{
            prev=s[i]
        }
        if(i==s.length-1){
            if(i+1-start>2){
                res.push([start,i])
            }
        }
    }
    if(start==0) return [[0,s.length-1]]
    return res
    
};
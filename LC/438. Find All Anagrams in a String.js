var findAnagrams = function(s, p) {
    let len=p.length,res=[],op={}
    for(let i=0;i<p.length;i++){
        op[p[i]]=op[p[i]]+1||1
    }

    for(let i=0;i<s.length; i++){
        let sub = s.substring(i,i+len)
        if(sub.length<p.length){
            break
        }
        let os={},check=true
        for(let i=0;i<sub.length;i++){
            os[sub[i]]=os[sub[i]]+1||1
        }
        for(let x in op){
            if(op[x]!==os[x]){
               check=false
               break
            }
        }
        if(check) res.push(i)
    }
    return res
};
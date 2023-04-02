var successfulPairs = function(spells, potions, success) {
    // brute force
    let res=[]
    potions.sort((a,b)=>a-b)    
    for(i=0; i<spells.length; i++){
       let l=0,r=potions.length-1,spell=spells[i]
        while(l<=r){
            let mid=Math.floor((l+r)/2)
            if(potions[mid]*spell<success){
                l=mid+1
            }else{
               r=mid-1
            }
    
        }
        let count = l==potions.length? 0 : potions.length-l
        res.push(count)
    }
    return res
};
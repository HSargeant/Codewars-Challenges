var findRelativeRanks = function(score) {
    let order={}
    let sortedScores=[...score].sort((a,b)=>b-a).forEach((x,i)=>{
        if(i==0){
            order[x]="Gold Medal"
        }else if(i==1) {
            order[x]="Silver Medal"
        }else if(i==2){
            order[x]="Bronze Medal"
        }else order[x] = `${i+1}`
        
    })
    return score.map(x=>order[x])
};
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let losses={}
    for(let i=0; i<matches.length; i++){
        
        let loss=matches[i][1]
        let win = matches[i][0]
        if(!losses[win]){
            losses[win]=0
        }
        losses[loss] = losses[loss]+ 1 ||1
    }
    und=[]
    oneL=[]
    for(let x in losses){
        if(losses[x]==0){
            und.push(Number(x))
        }
        if(losses[x]==1){
            oneL.push(Number(x))
        }
    }
    return [und,oneL]
};
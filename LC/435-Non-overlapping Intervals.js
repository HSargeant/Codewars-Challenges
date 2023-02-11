var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=>a[0]-b[0])
    console.log(intervals)
    let start=intervals[0][0],end=intervals[0][1],count=0
    for(i=1; i<intervals.length;i++){
        let curr= intervals[i]
        if(curr[0]<end && curr[1] > end){
            count++
        }else if (curr[1] <= end){
            count++
            end=curr[1]
            start=curr[0]
        }else{
            end=curr[1]
            start=curr[0]

        }
    }
    return count
};
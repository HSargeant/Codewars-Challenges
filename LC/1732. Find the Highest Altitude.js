/**
 * @param {number[]} gain
 * @return {number}
 */
function largestAltitude(gain) {
    let alt=0,max=0
    for(let i=0; i<gain.length; i++){
        alt+=gain[i]
        if(alt>max) max=alt
    }
    return max
};
// 1732. Find the Highest Altitude
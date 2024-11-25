/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b)=>b[1]-a[1])
    let roomLeft=truckSize,res=0,i=0
    while(roomLeft>0&&i<boxTypes.length){
        let boxes=boxTypes[i][0]
        let units=boxTypes[i][1]
        if(boxes<=roomLeft){
            res+=boxes*units
            i++
            roomLeft-=boxes
            continue
        }
        while(boxes>roomLeft&&boxes>0){
            boxes--
        }
        roomLeft-=boxes
        res+=boxes*units
        i++
    }
    return res
};
// 1710. Maximum Units on a Truck
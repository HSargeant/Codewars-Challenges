function overlap7(ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2){
        const maxStart1 = Math.max(ax1, bx1);
    const minEnd1 = Math.min(ax2, bx2);
   
    const width = Math.abs(maxStart1 - minEnd1);
    
    const minStart2 = Math.min(ay2, by2);
    const maxEnd2 = Math.max(ay1, by1);
    
    const height = Math.abs(minStart2 - maxEnd2);
    
    let overLapArea = 0;
    
    if (maxStart1 <= minEnd1 && maxEnd2 <= minStart2) {
        overLapArea = width * height;
    }
    return overLapArea
}
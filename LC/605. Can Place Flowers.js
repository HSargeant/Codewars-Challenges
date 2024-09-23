function canPlaceFlowers(flowerbed, n) {
    if(n==0) return true
    if(flowerbed[0]==0 && (flowerbed[1]==undefined ||flowerbed[1]==0 )){
        flowerbed[0]=1
        n--
    }
    if(n==0) return true
    if(flowerbed[flowerbed.length-1]==0 && flowerbed[flowerbed.length-2]==0){
        flowerbed[flowerbed.length-1]=1
        n--
    }
    if(n==0) return true
    for (let i = 1; i < flowerbed.length; i++) {
        if (n == 0) return true
        let curr = flowerbed[i]
        if (curr == 1) continue
        let prev = flowerbed[i - 1] ==0
        let next = flowerbed[i + 1] ==0

        if (prev && next) {
            n--
            flowerbed[i] = 1
        }
    }
    return n == 0
};
// 605. Can Place Flowers
var passThePillow = function(n, time) {
    let move=1,x=1
    while(time){
        x+=move
        if(x==n) move=-1
        if(x==1) move = 1
        time--
    }
    return x
};
// 2582. Pass the Pillow

// Brute force
var nthUglyNumber = function(n) {
    let x=new Set([1])
    let res=[1]
    while(x.size<=5500){
        let a,b,c,res=[]
        for (let it = x.values(), val= null; val=it.next().value; ) {
             a=val*2
            b=val*3
            c = val*5
            res.push(a,b,c)
        }
        x= new Set([...x,...res])
    }
    // console.log([...x].sort((a,b)=>a-b))
    res=[...x].sort((a,b)=>a-b)
    return res[n-1]
};


// optimized
var nthUglyNumber = function(n) {
    let i2 = 0, i3 = 0, i5 = 0; // the 2,3,5 indeces
        let res = [1]; // we will fill this with the ugly multiples
        
        while (res.length!==n) { 
            let c2 = res[i2] * 2;
            let c3 = res[i3] * 3;
            let c5 = res[i5] * 5;
            // In c2,c3,c5 we now have 3 candidates for the next number. Pick the lowest one, to record in order
            // In the first round that will be 2
            let next = Math.min(Math.min(c2, c3), c5);
            res.push(next);
            
            if (next === c2) {
                // now the 2 index will increase, and next round, c2 will be four, so c3=3 will be lowest
                i2++;
            }
            if (next === c3) {
                i3++;
            }
            if (next === c5) {
                i5++;
            } 
            
        }
    
        return res[n-1]; 
    };
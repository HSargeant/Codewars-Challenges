/**
 * @param {number} maxSize
 */
class CustomStack{
    constructor(size){
        this.size = size
        this.stack=[]
    }

    push(num){
        if(this.size!=this.stack.length){
            this.stack.push(num)
        }
    }

    pop(){
        if(!this.stack.length) return -1
        return this.stack.pop()
    }

    increment(k,val){
        let limit = Math.min(this.stack.length,k)
        for(let i=0; i<limit; i++){
            this.stack[i]+=val
        }
    }
};
// 1381. Design a Stack With Increment Operation
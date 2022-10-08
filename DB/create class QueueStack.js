class QueueStack{
    constructor(){
        this.queue=[]
    }

    push(n){
       this.queue.push(n)

    }

    pop(n){
        if(n){
            let i = this.queue.indexOf(n)
            this.queue.splice(i,1)
        }else this.queue.pop()
    }
    peek(){
        return this.queue[this.queue.length-1]
    }

    empty(){
        return !this.queue.length
    }
}

// push() (adding an item), pop() (removing an item), peek() (returning the top value without removing it), and empty()
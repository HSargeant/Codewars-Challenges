// In this problem, we are going to be implementing our own enqueue, dequeue, and size methods for the queue constructor we are creating, so we should be able to create new instances of the Queue.
// The enqueue method takes in the item as a parameter, while the dequeue method does not.
// The size method simply returns the number of items in the queue.

class Queue{
  constructor(){
    this.arr=[]
  }
  enqueue(n){
     this.arr.push(n)    
  }
  dequeue(){
    return this.arr.shift()
    
  }
  size(){
    return this.arr.length
  }
}
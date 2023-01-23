function canVisitAllRooms(rooms) {
     let pet = new Set(),obj={}
     const traverse=(i=0)=>{
        if(pet.has(i)) return
        pet.add(i)
        for(let x of rooms[i]){
            obj[x]=true
            traverse(x)
        }
    }
    traverse()
     let max = rooms.length-1;
     let check = max *(max+1)/2;
     let res = Object.keys(obj).reduce((a,c)=>a+ +c,0)
    return res==check
}

let rooms = [[1],[2],[3],[],[6]]
console.log(canVisitAllRooms(rooms))

// There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

// When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

// Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

// Example 1:

// Input: rooms = [[1],[2],[3],[]]
// Output: true
// Explanation: 
// We visit room 0 and pick up key 1.
// We then visit room 1 and pick up key 2.
// We then visit room 2 and pick up key 3.
// We then visit room 3.
// Since we were able to visit every room, we return true.
// Example 2:

// Input: rooms = [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.
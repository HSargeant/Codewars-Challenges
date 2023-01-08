// Good morning,

// Need help with yesterday's problem? Start getting solutions.

// Today's Byte

// You’re about to set sail off a pier and first want to count the number of ships that are already in the harbor. The harbor is deemed safe to sail in if the number of boats in the harbor is strictly less than limit. Given a 2D array that presents the harbor, where O represents water and S represents a ship, return whether or not it’s safe for you to set sail.
// Note: All ships in the harbor can only lie entirely vertically or entirely horizontally and cannot be connected to another ship.

// Ex: Given the following 2D array harbor and value limit…

// harbor = [
//     [O, O, S],
//     [S, O, O],
//     [O, O, S]
// ], limit = 5, return true. You setting sail would cause there to be 4 ships in the harbor which is under the limit of 5.

// Ex: Given the following 2D array harbor and value limit…

// harbor = [
//     [O, O, O],
//     [S, O, S],
//     [O, O, S]
// ], limit = 3, return false. The harbor is not safe to sail in since you setting sail would cause the number of boats in the harbor to reach the limit.

const safeToSail=(arr,limit)=>{
    const dfs=(r=0,c=0)=>{
        if(r<0||c<0||r>arr.length-1||c>arr[0].length-1||arr[r][c]=="O") return
        arr[r][c]="O"
        if(r>0) dfs(r-1,c)
        if(r<arr.length-1) dfs(r+1,c)
        if(c>0) dfs(r,c-1)
        if(c<arr[0].length-1) dfs(r,c+1)
    }
    let count=0
    for(i=0; i<arr.length; i++){
        for(j=0; j<arr[0].length; j++){
            if(arr[i][j]=="S"){
                count++
                dfs(i,j)
            }
        }
    }
    console.log(count,"# of ships")
    return count+1 < limit
}

let harbor1 = [
    ["O", "O", "O"],
    ["S", "O", "S"],
    ["O", "O", "S"]
]

safeToSail(harbor1,3) //false

let harbor2 = [
    [O, O, S],
    [S, O, O],
    [O, O, S]
]

safeToSail(harbor2,5) //true
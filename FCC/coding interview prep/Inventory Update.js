// Inventory Update
// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    let inv={}
    for(const [curr,item] of arr2){
        inv[item]=curr
    }
    let len= arr1.length
    for(let i=0; i<len; i++){
        let [num,item] = arr1[i]
        if(inv[item]){
            let update = num+ +inv[item]
            arr1[i][0]=update
            inv[item]="000"
        }
    }
    for(let x in inv){
        if(inv[x]!=="000"){
            arr1.push([inv[x],x])
        }
    }
return arr1.map(x=>x.reverse()).sort().map(x=>x.reverse())

}


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);


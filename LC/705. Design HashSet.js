class MyHashSet{
    constructor(){
        this.hashset={}
    }

    contains(key) {
        return this.hashset[key] ? true:false
    }
    add(key) {
         this.hashset[key]=true
    }
    remove(key) {
        delete this.hashset[key]
    }
    
};


// 705. Design HashSet

// Design a HashSet without using any built-in hash table libraries.

// Implement MyHashSet class:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
 

// Example 1:

// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// Output
// [null, null, null, true, false, null, true, null, false]
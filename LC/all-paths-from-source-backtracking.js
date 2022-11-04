/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
 //loop through
 //take note of all numbers in array at current index and to temp array
 // for the numbers in the temp array when at their index, add any new numbers to temp array.
 //when at end push to results array
 // remove added items to temp and to object
 //call back again

var allPathsSourceTarget = function(graph) {

    let res=[]

    const dfs=(i,temp)=>{
        temp.push(i)
        if(i==graph.length-1){
            res.push([...temp])
            return
        }
        for(j of graph[i]){
            dfs(j,temp)
            temp.pop()
        }
    }
    dfs(0,[])
    return res
    
};


// https://leetcode.com/problems/all-paths-from-source-to-target/
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

 

// Example 1:


// Input: graph = [[1,2],[3],[3],[]]
// Output: [[0,1,3],[0,2,3]]
// Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
// Example 2:


// Input: graph = [[4,3,1],[3,2,4],[3],[4],[]]
// Output: [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
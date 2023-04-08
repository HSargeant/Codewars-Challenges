/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node,checked=[]) {
    if(!node) return node
    let nnode= new Node(node.val)
    checked[node.val] = nnode;
        for(let x of node.neighbors){
            if(!checked[x.val]){
                let newN = cloneGraph(x,checked)
                nnode.neighbors.push(newN)
            }else{
                let newN = checked[x.val]
                nnode.neighbors.push(newN)
            }
        }
    return nnode
};
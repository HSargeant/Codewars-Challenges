let shortestDistanceNode = (distances, visited) => {
	// create a default value for shortest
	  let shortest = null;
	  
		// for each node in the distances object
	  for (let node in distances) {
		  // if no node has been assigned to shortest yet
			// or if the current node's distance is smaller than the current shortest
		  let currentIsShortest =
			  shortest === null || distances[node] < distances[shortest];
			  
			// and if the current node is in the unvisited set
		  if (currentIsShortest && !visited.includes(node)) {
			  // update shortest to be the current node
			  shortest = node;
		  }
	  }
	  return shortest;
  };


function findShortestPath (graph, startNode, endNode){

		
// track distances from the start node using a hash object 

let distances = {}; 
distances[endNode] = "Infinity"; 
distances = Object.assign(distances, graph[startNode]);
 // track paths using a hash object 
 let parents = { endNode: null }; 
 for (let child in graph[startNode]) { parents[child] = startNode; } 
 // collect visited nodes 
 let visited = []; 
 
 // find the nearest node 

let node = shortestDistanceNode(distances, visited); 

 // for that node: while (node) { // find its distance from the start node & its child nodes let distance = distances[node]; let children = graph[node]; // for each of those child nodes: // make sure each child node is not the start node // save the distance from the start node to the child node // if there's no recorded distance from the start node to the child node in the distances object // or if the recorded distance is shorter than the previously stored distance from the start node to the child node // save the distance to the object // record the path // move the current node to the visited set // move to the nearest neighbor node // when the end node is reached, reverse the recorded path back to the start node //this is the shortest path // return the shortest path & the end node's distance from the start node

}
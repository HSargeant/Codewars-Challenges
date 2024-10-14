/**
 * @param {number[][]} isConnected
 * @return {number}
 */
function findCircleNum(isConnected) {
    let visited = new Set()
    function dfs(city = 0) {
        visited.add(city)
        for (let neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[city][neighbor] === 1 && !visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    }
    let provinces = 0
    for (let city = 0; city < isConnected.length; city++) {
        if (!visited.has(city)) {
            dfs(city);
            provinces++;
        }
    }
    return provinces

};
// 547. Number of Provinces
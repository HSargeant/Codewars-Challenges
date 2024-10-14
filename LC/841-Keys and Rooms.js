/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    let keys = new Set()
    const dfs = (i = 0) => {
        if (keys.has(i)) return
        keys.add(i)
        for (let j = 0; j < rooms[i].length; j++) {
            dfs(rooms[i][j])
        }
    }
    dfs()
    return keys.size === rooms.length
};
// 841. Keys and Rooms
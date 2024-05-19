function distributeCoins(root) {
    let moves = 0

    const dfs=(node)=> {
        if (!node) return 0
        let leftExcess = dfs(node.left)
        let rightExcess = dfs(node.right)
        moves += Math.abs(leftExcess) + Math.abs(rightExcess)
        return node.val + leftExcess + rightExcess - 1
    }

    dfs(root)
    return moves
}
// 979. Distribute Coins in Binary Tree
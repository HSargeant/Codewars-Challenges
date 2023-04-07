function numWaysToRemoveOneTree(trees) {
    function isAlternating(trees) {
        for (let i = 0; i < trees.length - 2; i++) {
            if (!(trees[i] < trees[i+1] && trees[i+1] > trees[i+2]) && !(trees[i] > trees[i+1] && trees[i+1] < trees[i+2])) {
                return false;
            }
        }
        return true;
    }

    let count = 0;
    for (let i = 0; i < trees.length; i++) {
        if (isAlternating([...trees.slice(0, i), ...trees.slice(i + 1)])) {
            count++;
        }
    }
    return count;
}
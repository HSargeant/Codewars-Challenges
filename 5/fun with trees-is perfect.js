class TreeNode {
    constructor(left = null, right = null) {
        this.left = left;
        this.right = right;
    }

    static isPerfect(root) {
        let nodeCount = 0;
        //quick math

        if (!root) return true;
        let dfs = (node) => {
            //number of nodes
            if (!node) return;
            nodeCount++;
            dfs(node.left);
            dfs(node.right);
        };
        dfs(root, 1);

        let h = maxDepthHandler(root, 1); //get height of tree
        //check if
        return 2 ** h - 1 == nodeCount;
    }

    static leaf() {
        return new TreeNode();
    }

    static join(left, right) {
        return new TreeNode().withChildren(left, right);
    }

    withLeft(left) {
        this.left = left;
        return this;
    }

    withRight(right) {
        this.right = right;
        return this;
    }

    withChildren(left, right) {
        this.left = left;
        this.right = right;
        return this;
    }

    withLeftLeaf() {
        return this.withLeft(TreeNode.leaf());
    }

    withRightLeaf() {
        return this.withRight(TreeNode.leaf());
    }

    withLeaves() {
        return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
    }
}

const maxDepthHandler = function (root, num) {
    // here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
    if (root == null) {
        return 0;
    }
    // this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
    if (root.right == null && root.left == null) {
        return num;
    }
    //Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
    if (root.right && root.left) {
        return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1));
    } else if (root.right != null) {
        return maxDepthHandler(root.right, num + 1);
    } else {
        return maxDepthHandler(root.left, num + 1);
    }
};

// DESCRIPTION:
// A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.

// You are given a class called TreeNode. Implement the method isPerfect which determines if a given tree denoted by its root node is perfect.

// Note: TreeNode class contains helper methods for tree creation, which might be handy for your solution. Feel free to update those methods, but make sure you keep their signatures intact (since they are used from within test cases).

// You can (and should) add more tests to validate your solution, since not all cases are covered in the example test cases.

// This kata is part of fun with trees series:

var isSubtree = function(root, sub) {
    let dfs = (node) => {
         if (!node) return false
         if(sameTree(node,sub)) return true
         return dfs(node.right)||dfs(node.left);
     };
     
   return dfs(root)
        
 };
     
 function sameTree(p,q){
         if(!p&&!q) return true
         if(!p||!q ||p.val!==q.val ) return false
         return sameTree(p.left,q.left)&&sameTree(p.right,q.right)
 }
 
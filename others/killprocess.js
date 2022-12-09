//if a process is shut off. all of its chidlren shut off as well

// Given a tree and a process to kill return all nodes that are shut off

function Node(val, children) {
    this.val = val;
    this.children = children;
};

//  const node=[1,null,3,2,4,null,5,6]

let testNode = new Node(1,[new Node(3,[new Node(5), new Node(6)]),new Node(2), new Node(4)])

   const killproc = (root,kill)=>{
        let res=[]
        let parent

       const findNode=(node)=>{
           if(!node) return 
           if(node.val==kill) {
                parent=node
                return
           }else{
                if(node.children){
                    node.children.forEach(x=>{
                        findNode(x)
                    })
                }
           }
       }
       findNode(root)
       
       const dfs=(node)=>{
            if(!node) return
            res.push(node.val)
            let child = node.children
            if(child){
                child.forEach(x=>{
                    dfs(x)
                })
            }
       }
       dfs(parent)   
       return res
   }

   console.log(killproc(testNode,1))
   console.log(killproc(testNode,2))
   console.log(killproc(testNode,3))
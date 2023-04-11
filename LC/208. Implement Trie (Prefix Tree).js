// 208. Implement Trie (Prefix Tree)

class TrieNode {
  constructor() {
    this.children = {};
      this.end=false
  }
}


class Trie {
  constructor() {
    this.root = new TrieNode()
  }
    
    
 insert(word) {
    let node =this.root
    
    for (const char of word) {
            const child = node.children[char] || new TrieNode();

            node.children[char] = child;

            node = child;
        }

        node.end = true;
    }
    
    search(word) {
        let node = this.root    
        for (const char of word) {
            const child = node.children[char] || null;

            if(!child) return false
        node=child
        }    
    
         return node.end
    };
    
    
    startsWith(prefix) {
             let node = this.root    
            for (const char of prefix) {
            const child = node.children[char] || null

            if(!child)  return false
    
            node=child
             
             } 
            return true
    };
    
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
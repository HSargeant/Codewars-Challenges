function isLockNessMonster(s) {
  //FIND THE LOCH NESS MONSTER. SAVE YOUR TREE FIDDY
    let words = ["tree fiddy", "3.50", "three fifty"]
    for (let x of words) {
        if(s.includes(x)){
            return true
        }
    }
}
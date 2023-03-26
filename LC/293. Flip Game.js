
const flip=(s)=>{
    let res=[]
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] == '+' && s[i] == '+') {
            res.push(s.slice(0, i-1)+"--"+s.slice(i+1));
        }
    }
    return res;
}


// You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

// Write a function to compute all possible states of the string after one valid move.

// For example, given s = "++++", after one move, it may become one of the following states:
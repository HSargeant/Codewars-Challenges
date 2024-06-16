var minMovesToSeat = function(seats, students) {
    let res=0
    seats.sort((a,b)=>a-b)
    students.sort((a,b)=>a-b)
    for(i in seats){
     res+= Math.abs(seats[i]-students[i])
    }
    return res
    
};
// 2037. Minimum Number of Moves to Seat Everyone
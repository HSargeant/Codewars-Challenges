/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let x = true
    sandwiches.reverse()
    students.reverse()
    while(sandwiches.length !==0&&x){
        let sandwich= sandwiches.pop()
        let student = students.pop()
        if(sandwich !== student){
            students.unshift(student)
            sandwiches.push(sandwich)
            let length= students.length
            while(length){
                if(students[length-1] !=sandwiches[sandwiches.length-1]){
                    length--
                }else{
                    break
                }
            }
            if(length==0){
                x =false
            }
        }
        
    }
    return students.length
    
};
// 1700. Number of Students Unable to Eat Lunch
var getDecimalValue = function(head) {
    let binNum =""
    let temp=head
    while(temp){
        binNum+=temp.val
        temp=temp.next

    }
    return parseInt(binNum,2)
    
};
// 1290. Convert Binary Number in a Linked List to Integer

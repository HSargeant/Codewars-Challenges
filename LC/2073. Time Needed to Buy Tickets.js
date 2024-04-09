/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let count=0

    while (tickets[k]) {
        for(i=0; i<tickets.length;i++){
            if(tickets[i] >0){
                tickets[i]--
                count++
                if(tickets[k]==0) return count 
            }
        }
    }

    return count;
};
// 2073. Time Needed to Buy Tickets
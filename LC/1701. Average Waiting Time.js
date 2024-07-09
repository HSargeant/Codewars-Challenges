/**
 * @param {number[][]} customers
 * @return {number}
 */
function averageWaitingTime(customers) {
    let time = customers[0][0] + customers[0][1]
    customers[0][1] = time
    let totalWait=customers[0][1] - customers[0][0]
    for (let i = 1; i < customers.length; i++) {
        if (time >= customers[i][0]) {
            time += customers[i][1]
            customers[i][1] = time
        } else {
            time = customers[i][0] + customers[i][1]
            customers[i][1] = time
        }
        totalWait+=(customers[i][1] - customers[i][0])
    }
    return totalWait / customers.length
};
// 1701. Average Waiting Time
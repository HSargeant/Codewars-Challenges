
// create mxn array average
function validArrangement(M, N)
{
    // If N == 1 then the only
    // subarray possible is of length 1
    // therefore, the mean will
    // always be an integer
 
    if (N == 1) {
        for (let i = 1; i <= M; i++)
            console.log(i);
        return;
    }
 
    // If M is odd the valid
    // arrangement is not possible
    if (M % 2 == 1) {
        console.log(-1);
        return;
    }
 
    // Else print all the rows
    // such that all elements of each row
    // is either odd or even
    else {
 
        // Count for the rows
        for (let i = 1; i <= M; i++) {
 
            // Initialize num with i
            let num = i;
 
            // Count for the columns
            for (let j = 1; j <= N; j++) {
                console.log(num," ");
 
                // As M is even,
                // even + even will give even
                // whereas odd + even gives odd
                num += M;
            }
            console.log("</br>");
        }
        return;
    }
}
var convert = function(s, numRows) {
       // If there's only 1 row, return s as it is
    if (numRows === 1) return s;
    
    // Initialize an array of empty arrays, each representing a row
    const rows = [...new Array(numRows)].map(() => [])
    
    // Convert s into an array of letters
    const letters = s.split('');
    
    // Insert letters into the rows from top to bottom then back up
    // until there are no more letters left
    let row = 0;
    let direction = 1; // 1 = going down a row, -1 = going up a row
    
    while (letters.length > 0) {
        // Remove the next character at the front of the array and add it to the current row
        rows[row].push(letters.shift())
        
        // If we're at the top row, set the direction and move to the row downwards
        if (row === 0) {
            direction = 1;
            row += direction;
            
        // If we're in a middle row, continue in the current direction
        } else if (row > 0 && row < numRows - 1) {
            row += direction;
            
        // If we're at the bottom row, set the direction and move to the row upwards
        } else if (row === numRows - 1) {
            direction = -1;
            row += direction;
        }   
    }
    
    // Convert and return the nested array of rows into as a single string
    return rows.map(row => row.join('')).join('');
    
};
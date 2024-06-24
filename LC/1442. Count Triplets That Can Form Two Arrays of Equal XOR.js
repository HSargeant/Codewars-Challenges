const countTriplets = (arr) => {
    const n = arr.length;
    let prefixXOR = new Array(n + 1).fill(0);
    // Calculate the prefix XOR array
    for (let i = 1; i <= n; i++) {
        prefixXOR[i] = prefixXOR[i - 1] ^ arr[i - 1];
    }
    let counter = 0;
    // Iterate through all triplets (i, j, k)
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j; k < n; k++) {
                let x = prefixXOR[j] ^ prefixXOR[i];
                let y = prefixXOR[k + 1] ^ prefixXOR[j];

                if (x === y) counter++;
            }
        }
    }
    return counter;
};
var maxRepeating = function(sequence, word) {
    let count = 0,check=word
	while (sequence.includes(check)) {
		count++
        check+=word
	};
	return count
};
// 1668. Maximum Repeating Substring

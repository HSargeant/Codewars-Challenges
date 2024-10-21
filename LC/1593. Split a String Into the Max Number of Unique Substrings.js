var maxUniqueSplit = function (s) {
    let result = 1

    let strings = new Set()

    function search(s) {
        if (!strings.has(s)) {
            strings.add(s)
            result = Math.max(result, strings.size)
            strings.delete(s)
        }

        for (let i = 1; i < s.length; i++) {
            let sub = s.substring(0, i)
            if (strings.has(sub)) continue
            strings.add(sub)
            search(s.substring(i))
            strings.delete(sub)
        }
    }

    search(s)

    return result
};
// 1593. Split a String Into the Max Number of Unique Substrings
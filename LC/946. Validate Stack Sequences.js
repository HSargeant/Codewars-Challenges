const validateStackSequences = function(pushed, popped) {
    const stack = []
    let i = 0

    for (const x of pushed) {
        stack.push(x)
        while (stack.length && stack[stack.length - 1] === popped[i]) {
            stack.pop()
            i++
        }
    }
    
    return pushed.length === i
}

// 946. Validate Stack Sequences

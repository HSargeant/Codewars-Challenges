class MinStack {
    constructor() {
        this.stack = []
        this.minstack = []
    }

    push(val) {

        if (!this.stack.length) {
            this.stack.push(val)
            this.minstack.push(val)
        } else {
            this.stack.push(val)

            if (val < this.minstack[this.minstack.length - 1]) {
                this.minstack.push(val)
            } else this.minstack.push(this.minstack[this.minstack.length - 1])
        }
    };

    pop() {
        if (!this.stack.length) return null
        this.minstack.pop()
        return this.stack.pop()
    };

    top() {
        return this.stack[this.stack.length - 1]

    };
    getMin() {
        return this.minstack[this.minstack.length - 1]
    };

};

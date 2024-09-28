/**
 * @param {number} k
 */
class MyCircularDeque {
    constructor(k) {
        this.arr = []
        this.limit=k
    }

    insertFront = function (value) {
        if (this.arr.length == 0) {
            this.arr.push(value)
            return true
        }

        if (this.arr.length == this.limit) return false

        this.arr.unshift(value)
        return true

    }
    insertLast = function (value) {
        if (this.arr.length == 0) {
            this.arr.push(value)
            return true
        }

        if (this.arr.length == this.limit) return false

        this.arr.push(value)
        return true
    };

    deleteFront() {
        if (this.arr.length == 0) {
            return false
        }

        this.arr.shift()
        return true

    }

    deleteLast() {
        if (this.arr.length == 0) {
            return false
        }

        this.arr.pop()
        return true
    }

    getFront() {
        if (this.arr.length == 0) return -1

        return this.arr[0]
    }
    getRear() {
        if (this.arr.length == 0) return -1
        return this.arr[this.arr.length - 1]
    }
    isEmpty() {
        return this.arr.length == 0
    }
    isFull() {
        return this.arr.length == this.limit
    }
};
// 641. Design Circular Deque
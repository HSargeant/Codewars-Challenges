class ProductOfNumbers {
    arr: number[]
    constructor() {
        this.arr = []
    }

    add(num: number): void {
        this.arr.push(num)

    }

    getProduct(k: number): number {
        let len = this.arr.length
        if (len == k) return this.arr.reduce((a, c) => a * c, 1)
        let res = 1, i = 1
        while (k) {
            res *= this.arr[len - i]
            k--
            i++
        }
        return res

    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */

//  1352. Product of the Last K Numbers
export class HeapQueue {
    constructor(compareFn) {
        this.heap = []

        this.compareFn = compareFn || ((a, b) => a - b)
    }

    size() {
        return this.heap.length
    }

    push(value) {
        this.heap.push(value)
        this.siftUp()
    }

    pop() {
        if(this.size() === 0) return null
        if(this.size() === 1) return this.heap.pop()

        const top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.siftDown()
        return top
    }

    peek() {
        return this.size() > 0 ? this.heap[0] : null
    }

    siftUp() {
        let index = this.size() - 1;

        while(index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)

            if(this.compareFn(this.heap[index], this.heap[parentIndex]) < 0) {
                [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
                index = parentIndex
            } else {
                break
            }
        }
    }

    siftDown() {
        let index = 0;
        const length = this.size()

        while(true) {
            const left = 2 * index + 1
            const right = 2 * index + 2
            let smallest = index

            if(left < length && this.compareFn(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left
            }

            if(right < length && this.compareFn(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right
            }

            if(smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
                index = smallest
            } else {
                break
            }
        }
    }
}
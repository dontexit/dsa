class Node {
    constructor(value) {
        this.value = value
    }

    value = null
    next = null;
}

class singleQueue {
    constructor(value = undefined) {
        if (value) {
            const node = new Node(value)
            node.next = null
            this.head = node
            this.tail = node
            this.length = 1
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }

    }

    enqueue(value) {
        const node = new Node(value)
        if (this.head) {
            const temp = this.tail
            node.next = temp
            this.tail = node
        }
        else {
            this.head = node
            this.tail = node
        }
        this.length++
    }

    dequeue() {
        if (this.tail) {
            if (this.tail.next) {
                const temp = this.tail
                this.tail = temp.next
                temp.next = null
                temp.value = null
            }
            else {
                this.tail = null;
                this.head = null
            }
        }

        if (this.length > 0) {
            this.length--
        }

    }

}
q=new singleQueue()
q.enqueue(1)
console.log(q)
q.enqueue(2)
console.log(q)
q.enqueue(3)
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)
q.dequeue()
console.log(q)






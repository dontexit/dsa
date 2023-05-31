class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }

}

class StackS {
    constructor(value = undefined) {
        if (value) {
            const node = new Node(value)
            this.head = node
            this.tail = node
            this.length = 0
        }
        else {
            this.head = null
            this.tail = null
            this.length = 0
        }
    }

    push(value) {
        const node = new Node(value)
        if (this.tail) {
            node.next = this.head
            this.head = node
        }
        else {
            this.head = node
            this.tail = node
        }

        this.length++

    }

    pop() {
        if (this.head) {
            if (this.head.next) {
                const temp = this.head
                this.head = temp.next
                temp.value=null

            } else {
                this.head.value = null
                this.head = null
                this.tail = null

            }

        }
        if (this.length > 0) {
            this.length--
        }

    }

}

s = new StackS()
s.push(1)
s.push(2)
s.push(3)
s.pop()
s.pop()
s.pop()
s.pop()
s.pop()


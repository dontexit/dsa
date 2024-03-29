class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class queue {
    constructor(value = undefined) {
        if (value) {
            const h = new Node(value)
            this.head = h
            this.tail = h
            this.length=1;
        } else {
            head = null
            tail = null
            this.length=0
        }
    }
    enque(value) {
        if (!this.head.value) {
            this.head.value = value
            this.tail.value = value
        } else {
            const tail = new Node(value)
            tail.next = this.tail
            this.tail.previous = tail
            this.tail = tail
        }
        this.length++

    }

    dequeue() {
        if (this.head) {
            if (this.head.previous) {
                const temp = this.head
                this.head = temp.previous
                temp.previous = null
                temp.next = null
                temp.value = null
            }
            else {
                this.head = null
                this.tail = null
            }

        }
    if(this.length>0){
        this.length--
    }

    }
}


q1 = new queue(1)
console.log(q1)
q1.enque(2)
console.log(q1)
q1.enque(3)
q1.enque('test')
console.log(q1)
q1.dequeue()
console.log(q1)
q1.dequeue()
console.log(q1)
q1.dequeue()
console.log(q1)
q1.dequeue()
console.log(q1)
q1.dequeue()
console.log(q1)
q1.dequeue()
console.log(q1)

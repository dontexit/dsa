class Node {
    constructor(value){
        this.value=value
    }

    value = null
    next = null;
}

class QuesSingle {
    constructor(value = undefined) {
        if (value) {
            const node = new Node(value)
            node.next = null
            this.head = node
            this.tail = node

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
    }

    dequeue() {
        if (this.tail) {
            if (this.tail.next) {
                const temp = this.tail
                this.tail = temp.next
                temp.next = null
                temp.value =null 
            }
            else{
                this.tail=null;
                this.head=null
            }
        }
        
    }

}


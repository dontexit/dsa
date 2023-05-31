class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}

class StackS{
    constructor(value=undefined){
        if(value){
            const node = new Node(value)
            this.head=node
            this.tail=node
        }
        else{
            this.head=null
            this.tail=null
        }
    }

    push(value){
        const node = new Node(value)
        if(this.tail){
                node.next=this.head
                this.head=node
        }
        else{
            this.head=node
            this.tail=node
        }
        
    }

    pop(){
        if(this.head){
            if(this.head.next){
                const temp=this.head
                this.head=temp.next
                temp.next=null
                temp.value=null
            }
            this.head.value=null
            this.head=null
            this.tail=null


        }

    }

}

s= new StackS()
s.push(1)
s.push(2)
s.push(3)
console.log(s)
s.pop()
s.pop()
s.pop()
s.pop()
console.log(s)
s.pop()
console.log(s)


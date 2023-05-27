class LinkedList{
    constructor(value){
    this.value=value
    this.next=null    
    }
    push(value){
        const n=new LinkedList(value)
        n.next=null
        this.next=n
        return n;
    }
    pop(){
        if(this.next){
            if(this.next.next){
                this.next=this.next.next
            }else{
            this.next.next=null
            this.next=null
            }
        }
    }
}

l1=new LinkedList(1)
l2=l1.push(2)
l3=l2.push(3)
console.log(l1)
l1.pop()
l2.pop()
console.log(l1)




function bs(li,tar){
    let start=0
    let end=li.length-1
    let m=Math.floor(start+end/2)
    count=0
    while (true && count<10){
        console.log(start,end,m,li[m])
        if(li[m]==tar){
            console.log('true')
            return true
        }
        if(li[m]>tar){
            start=0
            end=m-1
            m=Math.floor(start+end/2)
        }else{
            start=m+1
            m=Math.floor((start+li.length-1)/2)     
        }
        if(start==end){
            console.log(li[end])
            return
        }
        count++

    }
}

bs([1,2,3,4,5,6,8],9) 

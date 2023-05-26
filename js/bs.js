function bs1(nums, target) {
    let s=0
    let e=l
    let m=Math.floor(s+e/2)
    while (true){
        console.log(s,e,m,nums[m])
        if(m<0){
            return -1
        }
        if(s==e){
            if(nums[s]==target){ 
                return nums[s]
            }
            return -1
        }
        if(nums[m]==target){
            return nums[m]
        }
       if(nums[m]>target){ 
            e=m-1
            m=Math.floor((s+e)/2)
       }else{
            s=m+1
            m=Math.floor((s+e)/2) 
       }
        
    }
    
};

bs1([2,5],0)

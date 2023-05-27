
function bubbleSort(nums){
    for(let i=nums.length-1;i>0;i--){
        console.log(i)
        for(let j=0;j<i;j++){
            console.log(j,j+1,nums[j],nums[j+1])
            if(nums[j]>nums[j+1]){
                temp=nums[j]
                nums[j]=nums[j+1]
                nums[j+1]=temp
            }
            console.log(nums)
        }
   }
}


bubbleSort([2,8,10,7,14,9,3,1,7,-1])


def merge_sort(nums):
    def mergesort(nums):    
            if len(nums) > 1:
                mid = len(nums)//2
                L=nums[mid:]
                R=nums[:mid]
                mergesort(L)
                mergesort(R)
                i=j=k=0
                while i < len(L) and j < len(R):
                    if L[i]<= R[j]:
                        nums[k]=L[i]
                        i+=1
                        
                    else:
                        nums[k]=R[j]
                        j+=1
                    k+=1
                
                while i < len(L):
                    nums[k] = L[i]
                    i+=1
                    k+=1
                while j < len(R):
                    nums[k] = R[j]
                    j+=1
                    k+=1
    mergesort(nums)
    return nums
print(merge_sort([1,100,2,52,16]))

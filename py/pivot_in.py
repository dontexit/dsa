class Solution(object):
    @classmethod
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        num_len=len(nums)
        if num_len<0:
            return -1
        if num_len==1:
            return 0
        enum_left=0
        enum_right=0
        for i in range(num_len):
            if i > 0:
                enum_left+=nums[i-1]
            # print(f'left -> {enum_left}')
            #left wards
            
            if enum_right == 0:
                for j in range(i+1,num_len):
                    enum_right+=nums[j]
                    
            else:
                enum_right=enum_right-nums[i]
            
            
            if enum_right == enum_left:
                return i
        return -1
                

Solution.pivotIndex([8,4,6,7,9,-4])
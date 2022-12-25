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
        for i in range(num_len):
            current=nums[i]
            enumy=0
            enumx=0
            for j in range(i+1,num_len):
                print(nums[j])
                enumx+=nums[j]
                print("j enum -> {enumx},j --> {j}")
            print(f"enumx > {enumx}")

            for k in range(i):
                enumy+=nums[k]
                if enumx < enumy:
                    break
            if enumx == enumy:
                print(f"final -> {i}")    


test1=Solution.pivotIndex([1,7,3,6,5,6])
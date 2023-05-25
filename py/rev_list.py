def reverseList(a):
    li=[]
    l=len(a)
    for i in range(1,l+1):
        li.append(a[l-i])
    return li
if __name__ == "__main__":
    l=[2,3,5,6,7]
    reverseList(l)
# print(reverseList([2,3,4,2,1,7]))


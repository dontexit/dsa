
cl=[[1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6],
    [1,2,3,4,5,6] 
   ]
def hourglass_sum(a):
    ln=len(a)
    c=0
    c1=0
    ck=0
    s=0
    cj=0
    l1=[]
    for i in range(ln):
        print("c",c)
        if c ==3:
            print(3)
            c=0  
        for j in range(len(a[i])):
            if cj==3:
                cj=0
            print("new list")
            s=0
            if c==1:
                print(" c = 2")
                if j+3 <=len(a[i])-1:
                    for k in range(1,len(a[i])-1):
                        print(i,k)
                        l1[ck]+=a[i][k]
                        if ck == 2:
                            c=0
                        c+=1    
                break
            else:
                if j+2 <=len(a[i])-1:
                    for k in range(j,j+3):
                        print(i,k)
                        s+=a[i][k]
                    if c == 0:
                        l1.append(s)
                    else:
                        l1[cj]+=a[i][k]
            print(l1)
            cj+=1
        c+=1
                        
        if i+3<=ln:                
            for k in range(i+1,i+3):
                print('second layer')

                if ln-k > 3:
                    for m in range(len(a[k])):
                        c1+=1
                        if c1 == 3:
                            c=0
                        if c ==2:
                            if m+3 <= len(a[k]):
                                print("second layer new list for 2")
                                for n in range(m+1,m+3):
                                    print(k,n)
                        else:
                            if m+3 <= len(a[k]):
                                print("second layer new list")
                                for n in range(m,m+3):
                                    print(k,n)
        

                    
hourglass_sum(cl)
 # 1  4  7  10  13 

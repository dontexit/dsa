def customSortString(order: str, s: str) -> str:
        o=[]
        order_rep=[0]*len(order)
        order_map={}

        for i in range(len(order)):
            order_map[order[i]]=i
        
        kl=list(order_map.keys())
        for i in range(len(s)):
            if s[i] in kl:
                print("has")
                order_rep[order_map[s[i]]]+=1
            else:
                o.append(i)
        if len(o)>0:
            gi=0
            for i in reversed(range(len(o))):
                if s[len(s)-1-gi] != s[o[i]]:
                    s[(len(s)-1)-gi]=s[o[i]]
                gi+=1
        l=0
        for i in range(len(kl)):
                for j in range(order_rep[order_map[kl[i]]]):
                        s[l]=kl[i]
                        l+=1
        print(s,order_map)
customSortString(['a','b','c'],['d','e','a','b',])
        
    

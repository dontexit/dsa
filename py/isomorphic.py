class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """
        if len(s) != len(t):
            return False
        s_map={}
        for i in range(len(s)):
            if s[i] in s_map:
                if s_map[s[i]] == t[i]:
                    continue
                return False
            
            if t[i] in s_map.values():
                if s[i] in s_map:
                    if s_map[s[i]] == t[i]:
                        continue
                return False   
            s_map[s[i]]=t[i]
        return True
            

            
        
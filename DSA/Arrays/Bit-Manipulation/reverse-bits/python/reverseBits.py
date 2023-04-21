def reverse(self, A):
        ans = 0
        i = 0
        while i < 32 :
            if A & (1<<i) != 0 :
                ans = ans | 1 << (31-i)
            i += 1
        return ans
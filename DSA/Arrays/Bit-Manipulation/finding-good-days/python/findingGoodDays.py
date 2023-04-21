def findingGoodDays(self, A):
        ans = 0
        while A > 0:
            if A & 1: 
                ans += 1
            A = A >> 1
        return ans
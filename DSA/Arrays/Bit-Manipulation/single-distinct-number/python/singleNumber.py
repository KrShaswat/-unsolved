def singleNumber(self, A):
        ans = 0
        for i in A:
            ans ^= i
        return ans
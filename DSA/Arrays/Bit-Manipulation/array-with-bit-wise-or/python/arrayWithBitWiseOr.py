def arrayWithBitWiseOr(self, A, B):
        # for 0 i will the count
        # for 1 i+1

        count = 0
        ans = 0
        for i in range(A):
            if B[i] == 1:
                count = 1+i
            ans += count
        return ans
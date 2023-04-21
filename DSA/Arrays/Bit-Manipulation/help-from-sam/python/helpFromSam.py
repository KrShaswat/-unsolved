def solve(self, A):
        # odd means sam help
        # even means no help
        ans = 0
        while A > 0:
            if A % 2 == 1:
                A = A ^ 1
                ans += 1
            elif A % 2 == 0:
                A = A >> 1
        return ans
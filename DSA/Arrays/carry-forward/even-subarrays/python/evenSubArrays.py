def solve(self, A):
        # check for
        # check for array length
        # first and last elements to be even

        if len(A)%2 == 0 and  A[0]%2 == 0 and  A[-1]%2 == 0:
            return "YES"
        return "NO"
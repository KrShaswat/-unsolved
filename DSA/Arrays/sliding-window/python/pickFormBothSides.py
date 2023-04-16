def solve(self, A, B):
        startSum = 0
       
        for i in range(B):
            startSum += A[i]

        result = startSum
        for i in range(0,B):
            startSum = startSum - A[B-i-1] + A[len(A)-1-i]
            result = max(startSum, result)
        return result

def solve(self, A):
        max = A[0];
        min = A[0];
        
        for i in range(1, len(A)):
            if max < A[i]:
                max = A[i] 
            elif min > A[i]:
                min = A[i]

        return max + min
def solve(self, A, B, C):
        N = len(A)
        i = B
        j = C 
        while i<j:
            A[i], A[j] = A[j] , A[i]
            i += 1
            j -= 1
        
        return A
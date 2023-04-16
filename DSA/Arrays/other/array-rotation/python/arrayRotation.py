def solve(self, A, B):
        N= len(A)
        def revInRange(A, B, C):
            i = B
            j = C
            
            while i < j:
                 A[i], A[j] = A[j], A[i]
                 i += 1
                 j -= 1
        
            return A
        
        k = B % N
        A = revInRange(A, 0, N-1)
        A = revInRange(A, 0, k-1)
        A = revInRange(A, k, N-1)

        return A
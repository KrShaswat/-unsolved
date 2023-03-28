def countOfElements(self, A):
        max = A[0]
        count = 0
        if len(A) <= 1:
            return 0
        
        for i in range(1, len(A)):
            if max < A[i]: 
                max = A[i] 
                count = 1
            elif max == A[i]:
                count += 1
        
        return len(A) - count
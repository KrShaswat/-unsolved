def countOfElements(self, A):
        max = A[0]
        count = 1
        length = len(A) 
        for i in range(1, length):
            if max < A[i]:
                max = A[i]
                count = 1
            elif max == A[i]:
                count += 1
        return length - count
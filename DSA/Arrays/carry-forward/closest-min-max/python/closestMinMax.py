def solve(self, A):
        #find max and min
        #find smallest array starting with min or max and ending with min or max
        min = A[0]
        max = A[0]
        for i in range(1, len(A)):
            if A[i] < min:
                min  = A[i]
            if A[i] > max:
                max = A[i]
        
        length = len(A)
        minIndex = -1
        maxIndex = -1
        for i in range (0, len(A)):
            if A[i] == min:
                minIndex = i
                if maxIndex >= 0:
                    subArrLen = (minIndex - maxIndex + 1)
                    if length > subArrLen:
                        length = subArrLen

            if A[i] == max:
                maxIndex = i
                if minIndex >= 0:
                    subArrLen = (maxIndex - minIndex  + 1)
                    if length > subArrLen:
                        length = subArrLen
        
        return length
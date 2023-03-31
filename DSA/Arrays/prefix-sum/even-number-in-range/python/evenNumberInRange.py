def evenNumberInRange(self, A, B):
        evenSum = [0]
        if(A[0]%2 == 0):
            evenSum[0] += 1

    
        for i in range(1, len(A)):
            if A[i]%2 == 0:
                evenSum.append(evenSum[i-1]+1)
            else:
                evenSum.append(evenSum[i-1])

        result = []
        for j in B:
            if j[0] == 0:
                result.append(evenSum[j[1]])
            else:
                result.append(evenSum[j[1]] - evenSum[j[0]-1])
        return result
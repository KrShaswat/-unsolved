def generateAllSubarrays(self, A):
        result= []
        length = len(A)
        for i in range(0,len(A)):
            for j in range(i, len(A)):
                result.append(A[i:j+1])
        
        return result

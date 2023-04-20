def subarraySum(self, A):
        sum = 0
        length = len(A)
        for i in range(length):
            sum += (i+1)*(length-i)*A[i]
        return sum
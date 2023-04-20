def maxSubarray(self, A, B, C):
        maxSum = 0
        for i in range(A):
            sum = 0
            for j in range(i, A):
                sum +=C[j]
                if sum > maxSum and sum <= B:
                    maxSum = sum
        
        return maxSum
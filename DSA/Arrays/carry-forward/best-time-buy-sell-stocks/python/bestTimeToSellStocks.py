def maxProfit(self, A):
        if len(A) < 1:
            return 0
        min = A[0] 
        profit = 0
        for i in A:
            if min > i:
                min = i
            else: 
                profit = max(profit, i - min)
        return profit
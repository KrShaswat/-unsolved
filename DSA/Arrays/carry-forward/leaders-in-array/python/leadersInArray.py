def leadersInArray(self, A):
        leader = [A[-1]]
        max = A[-1]
        for i in range(len(A)-2, -1, -1):
            if A[i] > max:
                leader.append(A[i])
                max = A[i]
        
        return leader
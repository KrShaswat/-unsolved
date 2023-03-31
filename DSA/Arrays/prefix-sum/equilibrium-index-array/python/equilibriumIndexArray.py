def equilibriumIndexArray(self, A):
        for i in range(1,len(A)):
            A[i]= A[i] + A[i-1]
        
        SL = 0
        SR = 0
        for i in range(0, len(A)):
            if i>0:
                SL = A[i-1]
            SR = A[len(A)-1] - A[i]
            if SL == SR:
                return i
        return -1
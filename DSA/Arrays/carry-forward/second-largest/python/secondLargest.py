def secondlargest(self, A):
      max = A[0]
      secMax = -1
      for i in range(1, len(A)):
          if max < A[i]:
              secMax = max
              max = A[i]
        
      return secMax
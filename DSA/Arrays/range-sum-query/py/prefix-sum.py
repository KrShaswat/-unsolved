def rangeSum(self, A, B):
  # make the prefix sum array
  # calculate the ans 
  prefixSum = [A[0]]        
  for i in range(1,len(A)):
      prefixSum.append(prefixSum[i-1] + A[i])

  result =  []
  for j in B:
      if (j[0] == 0):
          result.append(prefixSum[j[1]])
      else:
          result.append(prefixSum[j[1]] - prefixSum[j[0]-1])


  return result
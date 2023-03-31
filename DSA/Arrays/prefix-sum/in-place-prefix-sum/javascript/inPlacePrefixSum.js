export const inPlacePrefixSum = (A) => {
  for(let i=1 ;i < A.length; i++ ){
      A[i] = A[i] + A[i-1]
  }
  return A
}
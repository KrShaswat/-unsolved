export const equilibriumIndexArray = (A) => {
  for(let i= 1; i<A.length; i++){
      A[i] += A[i-1]
  }
  for (let j = 0; j<A.length; j++){
      if (A[j-1] == A[A.length-1] - A[j] ){
          return j
      }
      if (A[A.length-1] == A[0]){
          return j
      }
  }
  return -1
}
export const minMaxOfArray = (A) => {
  let max = A[0];
  let min = A[0];
 
  for(let i = 1; i < A.length; i++){
      if (max < A[i]) {
          max = A[i] 
      } else if (min > A[i]){
          min = A[i]
      }
  }
  return parseInt(max + min)
}
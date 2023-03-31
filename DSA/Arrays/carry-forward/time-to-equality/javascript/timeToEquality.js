export const timeToEquality = (A) => {
  let max = A[0];
  for(let i = 1; i < A.length; i++){
      if (max < A[i]) {
          max = A[i] 
      }
  }
  let seconds = 0;
  for(let i =0; i<A.length; i++){
      seconds += max - A[i]
  }
  return seconds
}
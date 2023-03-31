export const secondLargest = (A) => {
  let max = A[0]
  let secondMax = -1;
  for(let i = 1; i < A.length; i++) {
      if(max < A[i]){
          secondMax = max;
          max = A[i];
      } else if (A[i] > secondMax && A[i]< max) {
          secondMax = A[i]
      }
  }
  return Number(secondMax)
}
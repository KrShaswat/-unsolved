export const linearSearch = (A, B) => {
  let count = 0;
  for (let i = 0; i<A.length; i++){
      if(A[i] == B){
          count += 1
      } 
  }
  return count
}
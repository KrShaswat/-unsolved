export const bruteForce = (A, B) => {
  for(let i = 0; i<A.length ; i++ ){
        for(let j = i+1; j<A.length ; j++ ){
            if((A[i]+A[j]) === B){
                return 1
            }
      }
  }
  return 0
}
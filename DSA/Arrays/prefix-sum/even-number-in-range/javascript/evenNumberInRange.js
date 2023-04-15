export const evenNumberInRange = (A, B) => {
  pfSum = [ 1 - parseInt(A[0], 10) % 2]
  for (let i = 1;  i<A.length; i++) {
      pfSum[i] = (1 - parseInt(A[i])%2) + pfSum[i-1]
  }

  resArr = []
 for (let query = 0; query< B.length; query++){
      if(B[query][0] == 0){
          resArr.push( pfSum[B[query][1]])
      }else {
          resArr.push( pfSum[B[query][1]] - pfSum[B[query][0]-1])
      }
      
  }
  return resArr
}

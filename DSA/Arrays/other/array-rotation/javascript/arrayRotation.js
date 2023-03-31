export const arrayRotation = (A, B) => {
  const reverseArr = (A, B, C)=>{
      const N = [...A]
      let [i, j] = [B, C];
      while(i<j){
          let temp = N[i];
          N[i] = N[j];
          N[j] = temp
          i++
          j--
      }
      return N
}
  let times = B
  if(B>=A) {
      times = B%A
  } 
  
  let ans = [...A] 
 
  let n = A.length;
      
  if(B>=n){ 
     B = B % n;
  }
      ans = reverseArr(A,0,n-1);
      ans = reverseArr(ans,0,B-1);
      ans = reverseArr(ans,B,n-1);
  return ans
}
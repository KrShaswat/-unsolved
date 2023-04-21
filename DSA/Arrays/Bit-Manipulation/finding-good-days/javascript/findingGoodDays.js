export const findingGoodDays = (A) => {
  ans = 0 
  while (A > 0) {
      if (A & 1) {
          ans++
      }
      A = A>>1
  }
  return ans
}
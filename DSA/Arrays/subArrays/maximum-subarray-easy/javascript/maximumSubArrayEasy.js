export const maxSubarray = (A, B, C) => {
  let maxSum = 0n
  for (let i = 0; i < A; i++){
      let sum = 0n
      for (let j = i; j < A; j++){
          sum += C[j]
          if (sum > maxSum && sum <=B) {
              maxSum = sum
          }
      }
  }
  return Number(maxSum)
}
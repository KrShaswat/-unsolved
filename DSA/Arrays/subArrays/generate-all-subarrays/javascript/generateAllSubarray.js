export const generateAllSubarrays = (A) => {
  const res = []
  for (let i = 0; i < A.length; i++) {
      for (let j= i; j < A.length; j++) {
          let arr = []
          for (let k = i; k <= j; k++) {
              arr.push(A[k])
          }
          res.push(arr)
      }
  }
  return res
}
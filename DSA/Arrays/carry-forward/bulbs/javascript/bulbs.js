export const bulbs = (A) => {
  let switchResponse = 1
  let count = 0
  for (i of A){
      if(i !== switchResponse){
          count += 1
          switchResponse = i
      }
  }
  return count
}
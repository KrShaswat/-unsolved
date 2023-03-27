export const rangeSumQuery = (A, B) => {
        // make the prefix sum array
        // calculate the ans 
        const prefixSum = [A[0]]        
        for (let i = 1; i<A.length; i++) {
            prefixSum[i] = prefixSum[i-1] + A[i];
        }

        let result = []

        for(j of B) {
            if (j[0] === 0){
                result.push(prefixSum[j[1]])
            } else {
                result.push(prefixSum[j[1]] - prefixSum[j[0]-1])
            }
        }
        return result
	}
export const countOfElements = (A) => {
        let max = A[0];
        let count = 0;
        if(A.length <=1) {
            return 0
        }
        for(let i = 1; i < A.length; i++){
            if (max < A[i]) {
                max = A[i] 
                count = 1
            } else if(max === A[i] ) {count += 1}
        }
        return A.length - count
	}
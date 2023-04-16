export const amazingSubarray = (A) => {
        let count = 0
        for (let i = 0; i<A.length; i++){
            if (A[i] == 'a' ||A[i] == 'e' ||A[i] == 'i' || A[i] =='o' ||A[i] == 'u' || A[i] =='A' ||A[i] == 'E' ||A[i] == 'I' || A[i] =='O' ||A[i] == 'U'){
                count += A.length - i
            }
        }
        return count % 10003 
	}
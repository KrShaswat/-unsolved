export const reverseInRange = (A, B, C) => {
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
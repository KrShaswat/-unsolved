export const minorDiagonalSum = (A) => {
    let size = A.length;
    let sum = 0;
    let i = size-1;

    while(i>=0) {
        sum+=A[i][size-1-i];
        i--; 
    }
    
    return sum;
}
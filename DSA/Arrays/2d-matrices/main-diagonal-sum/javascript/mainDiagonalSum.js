export const mainDiagonalSum = (A) => {
    let size = A.length;
    let sum = 0;
    let i = 0;
    while(i<size) {
        sum+=A[i][i];
        i++;
    }
    return sum;
}
export const rowSum = (A) => {
    let rowsCount = A.length;
    let coulumnsCount = A[0].length;

    let result = new Array(rowsCount).fill(0);

    for (i=0; i<rowsCount; i++) {
        for (j=0; j<coulumnsCount; j++) {
            result[i]+= A[i][j];
        }
    }

    return result;
}
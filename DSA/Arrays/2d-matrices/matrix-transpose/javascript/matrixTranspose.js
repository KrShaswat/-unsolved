export const matrixTranspose = (A) => {
    let rowsCount = A.length;
    let columnsCount = A[0].length;

    let result = new Array(columnsCount);
    for (i=0; i<rowsCount; i++) {
        for (j=0; j<columnsCount; j++) {
            if (!result[j])
                result[j] = new Array(rowsCount);
            
            result[j][i] = A[i][j];
        }
    }
    return result;
}
export const columnSum = (A) => {
    let rowsCount = A.length;
    let columnsCount = A[0].length;

    let ans = new Array(columnsCount).fill(0);

    for (let j=0; j<columnsCount; j++) {
        for (let i=0; i<rowsCount; i++) {
            ans[j]+=A[i][j];
        }
    }

    return ans;
}
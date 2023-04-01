export const antiDiagonals = (A) => {
    let size = A.length;
    let arr = [];

    for (let c=0; c<size; c++) {
        let row = new Array(size).fill(0);
        let i=0; j=c;
        while(i<size && j>=0) {
            row[i] =  A[i][j]||0;
            j--;
            i++;
        }
        arr.push(row);
    }

    for (let r=1; r<size; r++) {
        let row = new Array(size).fill(0);
        let i=r; j=size-1;
        while(i<size && j>=0) {
            row[size-j-1] =  A[i][j]||0;
            j--;
            i++;
        }
        arr.push(row);
    }

    return arr;
}
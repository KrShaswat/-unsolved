export const rotateMatrix = (A) => {
    A = transpose(A);
    return reverseRows(A);
}

const transpose = (arr) => {
    for (i=0; i<arr.length; i++) {
        for (j=0; j<i; j++) {
            let temp = arr[i][j];
            arr[i][j]= arr[j][i];
            arr[j][i] = temp;
        }
    }
    return arr;
}

const reverseRows = (arr) => {
    for (i=0; i<arr.length; i++) {
        arr[i] = arr[i].reverse();
    }
    return arr;
}
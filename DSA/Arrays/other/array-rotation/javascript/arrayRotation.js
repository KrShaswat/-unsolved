export const arrayRotation = (A, B) => {
    const reverseArr = (A, B, C) => {
        let [i, j] = [B, C];
        while (i < j) {
            [A[i], A[j]] = [A[j], A[i]];
            i++;
            j--;
        }
        return A;
    };

    let n = A.length;
    let k = B % n;
    A = reverseArr(A, 0, n - 1);
    A = reverseArr(A, 0, k - 1);
    A = reverseArr(A, k, n - 1);
    return A;
};

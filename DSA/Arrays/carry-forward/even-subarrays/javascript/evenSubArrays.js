export const evenSubArrays = (A) => {
    if (A[0] % 2 === 0 && A[A.length - 1] % 2 === 0 && A.length % 2 === 0) {
        return "YES";
    }
    return "NO";
};

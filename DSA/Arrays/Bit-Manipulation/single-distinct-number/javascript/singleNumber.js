export const singleNumber = (A) => {
    let ans = 0n;
    for (let i = 0; i < A.length; i++) {
        ans ^= A[i];
    }
    return parseInt(ans);
};

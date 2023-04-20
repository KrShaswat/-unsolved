export const subarraySum = (A) => {
    let sum = 0n;
    for (let i = 0; i < A.length; i++) {
        sum += A[i] * BigInt((i + 1) * (A.length - i));
    }
    return sum;
};

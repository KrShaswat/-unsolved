export const unsetXBitsFromRight = (A, B) => {
    A = A >> BigInt(B);
    A = A << BigInt(B);
    return parseInt(A);
};

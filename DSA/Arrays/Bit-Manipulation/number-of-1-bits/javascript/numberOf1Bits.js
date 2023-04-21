export const numSetBits = (A) => {
    let count = 0;
    while (A > 0) {
        count += A & 1;
        A = A << 1;
    }
    return count;
};

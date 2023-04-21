export const checkBit = (A, B) => {
    return (A & (1 << B)) === 1 << B ? 1 : 0;
};

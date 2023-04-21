export const decimalToAnyBase = (A, B) => {
    let ans = 0;
    let power = 0;
    while (A > 0) {
        let rem = A % B;
        ans += rem * 10 ** power;
        power++;
        A = parseInt(A / B);
    }
    return ans;
};

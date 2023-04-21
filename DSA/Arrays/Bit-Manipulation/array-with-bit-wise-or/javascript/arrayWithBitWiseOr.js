export const arrayWithBitWiseOr = (A, B) => {
    let count = 0;
    let ans = 0;
    for (let i = 0; i < A; i++) {
        if (parseInt(B[i]) === 1) {
            count = i + 1;
        }
        ans += count;
    }
    return ans;
};

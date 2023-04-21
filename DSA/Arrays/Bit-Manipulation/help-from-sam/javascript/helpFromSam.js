export const helpFromSam = (A) => {
    let ans = 0;
    while (A > 0) {
        if (A % 2 === 1) {
            A = A ^ 1;
            ans += 1;
        } else {
            A = A >> 1;
        }
    }
    return ans;
};

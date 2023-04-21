export const anyBaseToDecimal = (A, B) => {
    num = A.toString();
    ans = 0;
    power = 0;
    for (let i = num.length - 1; i >= 0; i--) {
        ans += parseInt(num[i]) * B ** power;
        power += 1;
    }
    return ans;
};

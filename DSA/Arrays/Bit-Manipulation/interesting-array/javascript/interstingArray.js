export const interestingArray = (A) => {
    ans = 0;
    A.map((e) => {
        ans = ans ^ e;
    });
    return ans & 1 ? "No" : "Yes";
};

export const subArrayInRange = (A, B, C) => {
    ans = [];
    for (let i = B; i <= C; i++) {
        ans.push(A[i]);
    }
    return ans;
};

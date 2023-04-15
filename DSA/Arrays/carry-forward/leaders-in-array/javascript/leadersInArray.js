export const leadersInArray = (A) => {
    const leaders = [A[A.length - 1]];
    let currMax = A[A.length - 1];
    for (let i = A.length - 2; i >= 0; i--) {
        if (currMax < A[i]) {
            leaders.push(A[i]);
            currMax = A[i];
        }
    }
    return leaders;
};

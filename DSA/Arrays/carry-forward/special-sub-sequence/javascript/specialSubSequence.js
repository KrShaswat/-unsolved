export const specialSubSequence = (A) => {
    let countA = 0;
    let pairs = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === "A") {
            countA++;
        }
        if (A[i] === "G") {
            pairs += countA;
        }
    }
    return pairs;
};

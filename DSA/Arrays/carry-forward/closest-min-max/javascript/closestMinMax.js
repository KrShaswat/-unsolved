export const closestMinMax = (A) => {
    let min = A[0];
    let max = A[0];

    const N = A.length;

    for (let itr = 1; itr < N; itr++) {
        if (A[itr] > max) {
            max = A[itr];
        }
        if (A[itr] < min) {
            min = A[itr];
        }
    }

    let minSubLen = N;
    let maxIndex = -1;
    let minIndex = -1;

    for (let i = 0; i < N; i++) {
        if (A[i] === min) {
            minIndex = i;
            if (maxIndex >= 0) {
                subLen = minIndex - maxIndex + 1;
                if (subLen < minSubLen) {
                    minSubLen = subLen;
                }
            }
        }
        if (A[i] === max) {
            maxIndex = i;
            if (minIndex >= 0) {
                subLen = maxIndex - minIndex + 1;
                if (subLen < minSubLen) {
                    minSubLen = subLen;
                }
            }
        }
    }
    return minSubLen;
};

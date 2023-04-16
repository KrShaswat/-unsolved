export const productArrayPuzzle = (A) => {
    proSum = A[0];
    for (let i = 1; i < A.length; i++) {
        proSum *= A[i];
    }
    let result = [];
    for (let j = 0; j < A.length; j++) {
        result.push(proSum / A[j]);
    }
    return result;
};

export const productPuzzleMulti = (A) => {
    pf = [...A];
    sf = [...A];
    i = 1;
    j = A.length - 2;
    while ((i < A.length) & (j > 0)) {
        pf[i] = pf[i - 1] * A[i];
        sf[j] = sf[j + 1] * A[j];
        i++;
        j--;
    }
    result = [];
    for (let x = 0; x < A.length; x++) {
        if (x == 0) {
            result.push(sf[x + 1]);
        } else if (x == A.length - 1) {
            result.push(pf[x - 1]);
        } else {
            result.push(sf[x + 1] * pf[x - 1]);
        }
    }
    return result;
};

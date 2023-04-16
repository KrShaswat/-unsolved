export const reverseInRange = (A, B, C) => {
    const N = [...A];
    let [i, j] = [B, C];
    while (i < j) {
        [N[i], N[j]] = [N[j], N[i]];
        i++;
        j--;
    }
    return N;
};

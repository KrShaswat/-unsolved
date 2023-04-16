const bestTimeToSellStocks = (A) => {
    let min = A[0];
    let profit = 0;
    A.map((ele) => {
        if (ele < min) {
            min = ele;
        } else {
            if (profit < ele - min) {
                profit = ele - min;
            }
        }
    });
    return profit;
};

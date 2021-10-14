var txr = [];

function processTransactions(transActions) {

    txr = [];

    if (!Array.isArray(transactions) || transactions.includes(undefined)) {
        throw new Error("Undefined collection of transactions")
    }

    let txCount = {}

    const numberOfTransactions = transActions.length;

    for(var i = 0; i < numberOfTransactions; i++) {
        const transaction = transActions[i];
        txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    }

    txCount = sortByAmountThenName(txCount);
    
    // Place them back in array for returning
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

    return txr;
}

function sortByAmountThenName(txCount) {
    let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
        return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
    );

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }

    return sortedResults;
}

module.exports = processTransactions;
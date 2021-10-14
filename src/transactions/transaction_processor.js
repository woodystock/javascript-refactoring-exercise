var txr = [];

function processTransactions(transActions) {

    txr = [];

    if (!Array.isArray(transactions) || transactions.includes(undefined)) {
        throw new Error("Undefined collection of transactions")
    }

    const Count = {};
      for (let j of transactions) 
        Count[j] ? (Count[j] += 1) : (Count[j] = 1); // frequency of each item

    const SortbyNumber = Object.entries(Count); // Object [item, frequency]
    ​
    SortbyNumber.sort((a, b) => b[1] - a[1] || -(a[0] < b[0])); // Sort based on frequency
    
    // Place them back in array for returning
    Object.keys(txCount).forEach(function (key, index) {
        txr[index] = `${key} ${txCount[key]}`;
    });

    return txr;
}

module.exports = processTransactions;
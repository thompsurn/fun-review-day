const deepEntries = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj
    }
    let entries = []
    for (let key in obj) {
        entries.push([key, deepEntries(obj[key])])
    }
    return entries
};

const deeplyEquals = (a, b) => {
    if (a === b) {
        return true
    } else {
        return false
    }
};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };

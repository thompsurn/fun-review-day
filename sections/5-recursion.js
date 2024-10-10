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
    if (a === b) return true; 
    
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
      return false;
    }
  
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
  
    if (aKeys.length !== bKeys.length) return false;
  
    return aKeys.every(key => deeplyEquals(a[key], b[key]));
  };
  

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };

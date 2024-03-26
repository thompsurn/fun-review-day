function generateMultiples(numToMultiply) {
    return function newFunc(lengthOfList) {
        let multiplesArray = []
        for (let i= 1; i <= lengthOfList; i++) {
            multiplesArray.push(numToMultiply* i)
        }
        return multiplesArray
    }
}

function secureFunc(passwordStr, OGFunc) {
    //MDN points to the 'rest' syntax to include all other possibe arguments
    return function newFunc(passwordAttempt, ...allOtherArgs) {
        if (passwordStr !== passwordAttempt) {
            return `Sorry your password is incorrect!`
        } else {
            return OGFunc(...allOtherArgs)
        }
    }
}

module.exports = { generateMultiples, secureFunc };

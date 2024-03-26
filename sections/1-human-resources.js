function makeNameTags(guests) {
    return guests.map((guest) => ({
         ...guest, nameTag: `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`
    }))
}

function createPoll(NCFruitBowl) {
    let poll = {}
    NCFruitBowl.forEach((fruit) => {
        poll[fruit] = (poll[fruit] || 0) +1
    })
    return poll
}

module.exports = { makeNameTags, createPoll };

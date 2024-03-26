function makeNameTags(guests) {
    return guests.map((guest) => ({
         ...guest, nameTag: `${guest.title} ${guest.forename} ${guest.surname}, ${guest.company}`
    }))
}

function createPoll() {}

module.exports = { makeNameTags, createPoll };

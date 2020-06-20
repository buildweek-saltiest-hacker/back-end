const db = require('../../database/dbConfig')

module.exports = {
    register, 
    findBy
}

async function register(user) {
    return db('users').insert(user, 'id')
}

function findBy(filter, value) {
    return db("users").where(filter, value);
}
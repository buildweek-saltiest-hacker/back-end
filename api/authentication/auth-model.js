const db = require('../../database/dbConfig')

module.exports = {
    register, 
    findBy
}

async function register(user) {
    const [id] = await db('users').insert(user, 'id').returning('id')
    return db('user').where({ id }).first()
}

function findBy(filter, value) {
    return db("users").where(filter, value);
}
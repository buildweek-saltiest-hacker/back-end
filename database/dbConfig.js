const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.DB_ENV || 'staging';

console.log(environment)

module.exports = knex(knexfile[environment]);
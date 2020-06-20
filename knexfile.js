module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/dev.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      },
    seeds: { directory: './database/seeds' },
  },

  production: {

    client: 'pg', // change from postgresql to pg
    connection: process.env.DATABASE_URL, // change connection object to env variable
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations',
    },

    seeds: { 
      directory: './database/seeds'
     },

  }
};

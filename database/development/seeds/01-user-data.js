
exports.seed = function(knex) {

  return knex("users").insert([
    {username: 'admin', password: 'admin'},
    {username: 'test', password: 'test'},
  ]);
  
};

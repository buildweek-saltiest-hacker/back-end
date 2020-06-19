
exports.seed = function(knex) {

  return knex("comment_user").insert([
    {comment_id: '100', user_id: 1},
    {comment_id: '101', user_id: 1},
    {comment_id: '102', user_id: 1},
    {comment_id: '100', user_id: 2},
    {comment_id: '101', user_id: 2},
    {comment_id: '104', user_id: 2},
  ]);
  
};

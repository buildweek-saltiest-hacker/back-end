
exports.seed = function(knex) {

  return knex("comments").insert([
    {id: '100', commentdata: 'comment1'},
    {id: '101', commentdata: 'comment2'},
    {id: '102', commentdata: 'comment3'},
    {id: '103', commentdata: 'comment4'},
    {id: '104', commentdata: 'comment5'},
  ]);
  
};

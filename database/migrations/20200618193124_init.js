
exports.up = function(knex) {
    return knex.schema
    .createTable("users", tbl => {
        tbl.increments('id');
        tbl.string("username", 18)
            .notNullable()
            .unique()
            .index()
        tbl.string("password", 18)
            .notNullable();
    })
    .createTable('comments', tbl => {
        tbl.string("id")
            .primary()
            .index()
            .notNullable();
        tbl.string("commentdata")
            .notNullable();
    })
    .createTable('comment_user', tbl => {
        tbl.increments();
        tbl.string("comment_id").unsigned()
        tbl.foreign('comment_id').references('comments.id').onUpdate('CASCADE').onDelete('CASCADE')
            // .unsigned()
            // .notNullable()
            // .references('id')
            // .inTable('comments')
            // .onUpdate('CASCADE')
            // .onDelete('CASCADE');
        tbl.integer('user_id').unsigned()
        tbl.foreign('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
            // .unsigned()
            // .notNullable()
            // .references('id')
            // .inTable('users')
            // .onUpdate('CASCADE')
            // .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('comment_user')
    .dropTableIfExists("comments")
    .dropTableIfExists('users')
};
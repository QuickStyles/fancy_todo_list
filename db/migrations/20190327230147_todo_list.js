exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_list', (t) => {
    t.increments('id').primary();
    t.string('username');
    t.text('body');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_list');
};

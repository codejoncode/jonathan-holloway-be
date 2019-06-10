
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lectures', function(tbl){
      tbl.increments()
      tbl.string("title").notNullable()
      tbl.string('url').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('lectures')
};

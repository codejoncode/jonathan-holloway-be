
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(tbl){
      tbl.increments()
      tbl.string("title").notNullable()
      tbl.string("message", 5000).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogs')
};

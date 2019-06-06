
exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(tbl){
      tbl.increments()
      tbl.string("title").notNullable()
      tbl.string("message").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogs')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(tbl){
      tbl.increments()
      tbl.string("title").notNullable()
      tbl.text("message").notNullable()
      tbl.string("image").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('blogs')
};


exports.up = function(knex, Promise) {
  return knex.schema.createTable('blogs', function(tbl){
      tbl.increments()
      tbl.string("title").notNullable()
      trbl.string("body").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExits('blogs')
};

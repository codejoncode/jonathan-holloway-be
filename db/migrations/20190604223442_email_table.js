
exports.up = function(knex, Promise) {
  return knex.schema.createTable('emails', function(tbl){
      tbl.increments()
      tbl.string("message").notNullable()
      tbl.string("email").notNullable()
      tbl.string("company").notNullable()
      tbl.string("name").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('emails')
};

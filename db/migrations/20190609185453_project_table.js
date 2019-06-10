
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments()
        tbl.string("features")
        tbl.string("title").notNullable()
        tbl.string("description")
        tbl.string("technologies")
        tbl.string("image")
        tbl.string("gif")
        tbl.string("githubUrl")
        tbl.string("plan")
        tbl.string("deployUrl")
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects')
};

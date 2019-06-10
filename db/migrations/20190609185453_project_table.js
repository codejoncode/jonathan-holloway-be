
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
        tbl.increments()
        tbl.string("features", 2000)
        tbl.string("title").notNullable()
        tbl.string("description", 2000)
        tbl.string("technologies", 2000)
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

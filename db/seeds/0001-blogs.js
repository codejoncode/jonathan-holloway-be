
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogs').insert([
        {title: 'rowValue1', message: "this is a simple message"},
        {title: 'rowValue2', message: "this is a simple message"},
        {title: 'rowValue3', message: "this is a simple message"}
      ]);
    });
};

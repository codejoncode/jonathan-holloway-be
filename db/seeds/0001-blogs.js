
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, title: 'rowValue1', body: "this is a simple body"},
        {id: 2, title: 'rowValue2', body: "this is a simple body"},
        {id: 3, title: 'rowValue3', body: "this is a simple body"}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'rowValue1', password: "blabla"},
        {id: 2, username: 'rowValue2', password: "blabla"},
        {id: 3, username: 'rowValue3', password: "blabla"}
      ]);
    });
};

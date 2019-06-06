
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'rowValue1', password: "blabla"},
        {username: 'rowValue2', password: "blabla"},
        {username: 'rowValue3', password: "blabla"}
      ]);
    });
};

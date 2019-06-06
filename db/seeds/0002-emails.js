
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('emails').del()
    .then(function () {
      // Inserts seed entries
      return knex('emails').insert([
        {name:'emails 1', message: "this is a simple message", company: "email company", email : "test@test.com"},
        {name: 'emails 2', message: "this is a simple message", company: "email company", email : "test@test.com"},
        {name: 'emails 3', message: "this is a simple message", company: "email company", email : "test@test.com"}
      ]);
    });
};

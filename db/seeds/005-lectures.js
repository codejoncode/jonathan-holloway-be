
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { url: "https://www.youtube.com/embed/lxuyCxw_sg4", title : "Web Server Guided Project I" },
        { url: "https://www.youtube.com/embed/KWKR4tXLqW8", title: "Web Server Guided Project II" },
        { url: "https://www.youtube.com/embed/otxoIXgr6Tk", title: "Web Server Guided Project III" },
        { url: "https://www.youtube.com/embed/UH6QHhxB3TQ", title: "Web Server Guided Project IV" },
      ]);
    });
};

require('dotenv').config();
const dbCongig = require('./dbConfig.js');
const server = require('./server.js');
const db = require("./dbConfig.js");
const PORT = process.env.PORT || 4001;

server.get("/", (req, res) => {
    res.send("Hello World")
  });
const port = 4001
server.listen(port, () => {
    console.log (`Server is listening on port ${port}`);
    console.log("Database URL:", process.env.DATABASE_URL);

  db.raw('SELECT 1')
    .then(() => console.log('Database connection is active'))
    .catch(err => console.error('Database connection error:', err));
})
// node index.js
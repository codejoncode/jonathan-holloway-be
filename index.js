require('dotenv').config();
const dbCongig = require('./dbConfig.js');
const server = require('./server.js');
const db = require("./dbConfig.js");
const PORT = process.env.PORT || 4001;

server.get("/", (req, res) => {
    res.send("Hello World")
  });
// HAD TO USE 
// const port = 4001;  // to get it to work locally
server.listen(PORT, () => {
    console.log (`Server is listening on port ${PORT}`);
})
// node index.js
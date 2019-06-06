require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 4001;

server.get("/", (req, res) => {
    res.send("Hello World")
  });

server.listen(PORT, () => {
    console.log (`Server is listening on port ${PORT}`);
})
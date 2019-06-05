const express = require('express')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 4001;


app.get('/jobs', (req, res, next) => {
    console.log("went to get jobs")
})


app.listen(PORT, () => {
    console.log (`Server is listening on port ${PORT}`);
})



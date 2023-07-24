require("dotenv").config();
const express = require("express");
const moongose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT
const app = express();
const DB_URL = process.env.DB_URL

moongose.connect(DB_URL);
const db = moongose.connection

app.use(express.json());

db.on('connected', () => {
    console.log("Database Connected");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api/v1', express.Router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv").config();
const apiRoutes = require('./routes/api');

const bodyParser = require('body-parser');

const app = express();
const port = 3020;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(`mongodb+srv://vrosaldoadamas:${process.env.PASSWORD}@fowlfury.0lp8vlf.mongodb.net/lgu_inquiry?retryWrites=true&w=majority` , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let db = mongoose.connection

db.on("error", console.error.bind(console, "connection error"));
db.on("open", () => console.log("Connected to MongoDB."))

app.use('/api', apiRoutes);

app.listen(port, () => console.log(`LGU Inquiry is now online on port ${port}`));
console.log("Please dont stop this server.");

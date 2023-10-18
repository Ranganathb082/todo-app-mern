const express = require('express')
const mongoose = require('mongoose');

const app = express()

mongoose.connect("mongodb://localhost:27017/")
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


const PORT = 3000
app.listen(PORT, () => {
    console.log("Listening on the port");
})

app.get('/', (req, res) => {
    res.json("Hey!!")
})
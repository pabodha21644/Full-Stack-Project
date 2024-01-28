var express = require("express");
var app = express();
var httpObj = require("http");
var http = httpObj.createServer(app);
const mongoose = require('mongoose');

const uri = "mongodb+srv://pabodharanawaka:kbtJ1xpl3tduRBvK@cluster0.c9qpdqp.mongodb.net/?retryWrites=true&w=majority";

// main URL of website
var mainURL = "http://localhost:4000";

http.listen(4000, function () {
    console.log("Server started at " + mainURL);

    mongoose.connect(uri)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
});

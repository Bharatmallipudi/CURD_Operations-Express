const express = require('express');
const mongoose = require("mongoose");
const data = require('./model')
const app = express();
app.use(express.json())
mongoose.connect('mongodb+srv://database:database@cluster0.oldsrhe.mongodb.net/?retryWrites=true&w=majority')
app.use("/",require("./routers/first"))
app.listen(4000,()=> console.log("Data Base IS Connected"));
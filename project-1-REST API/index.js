const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")
const userRouter = require('./routes/user')
const { connectMongoDB } = require("./connection")
const { logReqRes } = require("./middleware")
const { User } = require("./models/user")

//const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Connecting to MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/app-1").then(() => console.log('MongoDB Connected...'));

//Middleware
app.use(express.urlencoded({extended: false}))

app.use(logReqRes("log.txt"))

// Hybrid Model
// api/users - JSON
// /users - HTML

//Routes
app.use("/user", userRouter);


app.listen(PORT, () => console.log('Server started at 8000...'))
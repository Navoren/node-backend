const express = require("express"); // express module is imported
const app = express(); //handler function is created using express framework

app.get('/', (req, res) => {
    return res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
    return res.send('Welcome to the About Page');
});

app.get('/name', (req, res) => {
   return res.send(`Hello ${req.query.name} you are ${req.query.age} years old`);
});

const { Console } = require("console");
   
app.listen(3000, () => {
    console.log("Listening on port 3000");
});


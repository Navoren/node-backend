const express = require("express")
const fs= require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Middleware
app.use(express.urlencoded({extended: false}))

// Hybrid Model
// api/users - JSON
// /users - HTML

//Routes

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);

});

app.get("/api/users/", (req, res) => { // api/users/:id - :id means it's a dynamic path parameter
    return res.json(users);
})

app
    .route("/api/users/:id")
    .get((req, res) => {  
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
    //because browser by default only takes GET req, we need to handle other methods otherwise using Postman.
    .post((req, res) => {
        //TODO: Create new user  
        return res.json({ status: "pending" })
    })
    .patch((req, res) => {
        //TODO: Edit the user with id
        return res.json({ status: "pending" })
    })
    .delete((req, res) => {
        //TODO: Delete the user with id
        return res.json({ status: "pending" })
    })

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users.length })
    });    
});

app.listen(PORT, () => console.log('Server started at 8000...'))
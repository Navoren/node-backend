const express = require("express")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

// Hybrid Model
// api/users - JSON
// /users - HTML

//Routes
app.get('/api/users', (req, res) => {
    return res.json(users);
});

app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);

});

app
    .route("/api/users/:id")
    .get((req, res) => {  // api/users/:id - :id means it's a dynamic path parameter
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
    })
    //because browser by default only takes GET req, we need to handle other methods otherwise using Postman.
    .post((req, res) => {
        //TODO: Create new user  
        returns.json({ status: "pending" })
    })
    .patch((req, res) => {
        //TODO: Edit the user with id
        returns.json({ status: "pending" })
    })
    .delete((req, res) => {
        //TODO: Delete the user with id
        returns.json({ status: "pending" })
    })

app.listen(PORT, () => console.log('Server started at 8000...'))
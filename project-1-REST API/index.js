const express = require("express")
const fs = require("fs")
const mongoose = require("mongoose")
//const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

//Schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    job_title: {
        type: String,
    },
    gender: {
        type: String,
    },
}, {timestamps: true}
);

const User = mongoose.model("user", userSchema);

//Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/app-1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("Mongo error :", err))

//Middleware
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    console.log("Hello from middleware");
    next();
})

// Hybrid Model
// api/users - JSON
// /users - HTML

//Routes

app.get('/users', async (req, res) => {
    const alldbUsers = await User.find({});
    const html = `
    <ul>
    ${alldbUsers.map((user) => `<li>${user.first_name} - ${user.email}</li>`).join("")}
    </ul>
    `;
    res.send(html);

});

app.get("/api/users/", async (req, res) => { // api/users/:id - :id means it's a dynamic path parameter
    const alldbUsers = await User.find({});
    return res.json(alldbUsers);
})

app
    .route("/api/users/:id")
    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({error : "user not found"})
    return res.json(user);
    })
    //because browser by default only takes GET req, we need to handle other methods otherwise using Postman.
    .post((req, res) => {
        //TODO: Create new user
        return res.json({ status: "pending" })
    })
    .patch(async(req, res) => {
        await User.findByIdAndUpdate(req.params.id, {last_name: "Doe"})
        return res.json({ status: "success" })
    })
    .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "success" })
    })

app.post('/api/users', async (req, res) => {
    const body = req.body;
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });

    console.log("result", result);

    return res.status(201).json({msg: 'success'})
});

app.listen(PORT, () => console.log('Server started at 8000...'))
const User = require("../models/user");

async function handleGetAllUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlePost(req, res) {
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


}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({error : "user not found"})
    return res.json(user);
}

async function handlePatchUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, {last_name: "Doe"})
        return res.json({ status: "success" })
}

async function handleDeleteById(req, res) {
    await User.findByIdAndDelete(req.params.id)
        return res.json({ status: "success" })
}
module.exports = {
    handleGetAllUsers,
    handlePost,
    handleGetUserById,
    handlePatchUserById,
    handleDeleteById
}
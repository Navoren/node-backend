const express = require("express");
const {handleGetAllUsers,handlePost, handleGetUserById, handlePatchUserById, handleDeleteById} = require('../controllers/user')
const router = express.Router();

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handlePost)

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handlePatchUserById)
    .delete(handleDeleteById)

module.exports = router
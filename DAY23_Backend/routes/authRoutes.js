const express = require("express");
const SignUp = require("../controller/authControllers");
const authRouter = express.Router();

authRouter.route("/signup").post(SignUp);

module.exports = authRouter;
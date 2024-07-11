const express = require("express");
const {SignUp,Login} = require("../controller/authControllers");
const authRouter = express.Router();

authRouter.route("/signup").post(SignUp);
authRouter.route("/login").post(Login);

module.exports = authRouter;
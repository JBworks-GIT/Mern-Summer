require("dotenv").config();
require("./config/db.js")
const express = require("express");
const SignUp = require("./controller/authControllers.js");
const authRouter = require("./routes/authRoutes.js");
const cors = require("cors");
const app = express();
app.use(express.json());

app.use(cors({ origin : true}))

app.get('/',(req,res) =>{res.send("app is running")});

app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT,()=>{
    console.log(`------------------ App Listening at ${process.env.PORT} ---------------`);
});

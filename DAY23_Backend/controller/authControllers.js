const { userModel } = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const findExistingUser = async (email) => {
  //async func is itself a promise
  const user = userModel.findOne({ email });
  return user;
};

const verifyPassword = async (plainPassword, hashedPassword) => {
  const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
  return isMatch;
};

const generateJWTToken = (user) => {
  const token = jwt.sign(
    {
      exp: 120, //in seconds
      data: {
        userId: user._id,
        email: user.email,
      },
    },
    process.env.JWT_SECRET_KEY
  );
  return token;
};

const SignUp = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Email and Password is required",
      });
      return;
    }

    // const EMAIL_REGEX =
    // if(!EMAIL_REGEX.test(email)){
    //   res.status(400).json({
    //     status :"fail",
    //     message : "Invaild Email",
    // })
    // }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "User created",
    });
  } catch (error) {
    if (error.code == "11000") {
      res.status(400).json({
        status: "fail",
        message: "Invalid Email and Password",
      });
      return;
    }
    console.log(Object.keys(error));
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

const Login = async (req, res) => {
  console.log("login", req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Invaild Error or password",
      });
      return;
    }
    const user = await findExistingUser(email);
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "Invalid email or password",
      });
      return;
    }
    const hashedPassword = user.password;
    const isPasswordCorrect = await verifyPassword(password, hashedPassword);
    if (!isPasswordCorrect) {
      res.status(400).json({
        status: "Fail",
        message: "Incorrect Password",
      });
      return;
    }

    res.status(200).json({
      status: "Success",
      message: "User Logged in",
      data : {
        user : {
          name : user.name,
          email : user.email,
        },
        token : generateJWTToken(user),
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

module.exports = { SignUp, Login };

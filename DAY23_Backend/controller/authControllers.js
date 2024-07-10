const { authModel } = require("../model/userModel");

const SignUp = async (req, res) => {
    console.log(req.body);
  const { email, password } = req.body;
  try {
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }

    const newUser = new authModel({
      email,
      password,
    });
    await newUser.save();

    res.status(201)
    
    res.send({
      status: "success",
      message: "User created",
      data: { user: newUser._id },
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Internal server error",
    });
  }
};

module.exports = SignUp;

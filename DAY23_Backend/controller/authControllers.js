const { userModel } = require("../model/userModel");
const bcrypt  = require("bcrypt");
// const findExistingUser = async (email)=>{
//   const user = userModel.findOne({email});
//   return user;
// }
const SignUp = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if(!email || !password){
      res.status(400).json({
        status :"fail",
        message: "Email and Password is required", 
      })
      return;
    }

    // const EMAIL_REGEX = 
    // if(!EMAIL_REGEX.test(email)){
    //   res.status(400).json({
    //     status :"fail",
    //     message : "Invaild Email",
    // })
    // }

    const hashedPassword = await bcrypt.hash(password ,10);
    const newUser = await userModel.create({
      email,
      password : hashedPassword,
    });

    res.status(201).json({
      status: "success",
      message: "User created",
    });
  } catch (error) {
    if(error.code == "11000"){
      res.status(400).json({
        status : "fail",
        message :"Invalid Email and Password",
      })
      return;
    }
    console.log(Object.keys(error));
    return res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// const login = async 

module.exports = SignUp;

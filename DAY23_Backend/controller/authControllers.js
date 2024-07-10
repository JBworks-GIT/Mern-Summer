
const SignUp = async (req,res) =>{
    const {email,password} = req.body;
    try{
    const existingUser = await authModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: 'fail',
        message: 'User already exists'
      });

    }}


module.exports = SignUp;
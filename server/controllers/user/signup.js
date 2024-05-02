const User= require("../../models/user");
const bcrypt = require("bcrypt");
exports.signup = async (req, res) => {
    try {
      //data fetch
      const {
        email,
        password,
        userName
      } = req.body;
  
      //validate
      if (
        !password ||
        !email ||
        !userName
      ) {
        return res.status(403).json({
          success: false,
          message: "All fields are required",
        });
      }
      //existing user
      const existinguser = await User.findOne({ email });
      if (existinguser) {
        return res.status(400).json({
          success: false,
          message: "User is already registered!",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        email,
        password: hashedPassword,
        userName:userName
      });
      return res.status(200).json({
        success: true,
        message: "User Created Successfully!",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
  
 
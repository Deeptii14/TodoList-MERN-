import User from "../../models/user.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    // Data fetch
    const { email, password, userName } = req.body;

    // Validate
    if (!password || !email || !userName) {
      return res.status(403).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User is already registered!",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
      userName,
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully!",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

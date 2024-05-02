import User from "../../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).json({
        success: false,
        message: "Please enter all details!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({
        success: false,
        message: "User is not registered!",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "10h",
      });
      user.token = token;
      user.password = undefined;

      // Setting token in response headers
      res.setHeader("token", `Bearer ${token}`);

      res.status(200).json({
        success: true,
        user,
        token,
        message: "Logged in successfully!",
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Incorrect password",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed due to internal server error",
      error: error.message,
    });
  }
};

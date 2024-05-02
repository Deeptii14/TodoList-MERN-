
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
          message: 'Authorization token is missing',
      });
  }
  const tokenValue = token.split(" ")[1];
  try {
      const decoded = jwt.verify(tokenValue,'deepti');
      console.log(decoded);
      req.user = decoded;
      next();
  }
  catch (error) {
      return res.status(401).json({
          success: false,
          message: 'Invalid token',
      });
  }
};

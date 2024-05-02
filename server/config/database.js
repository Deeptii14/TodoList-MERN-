const mongoose = require("mongoose");
require("dotenv").config();
exports.dbConnect = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("DB connected Successfully ...");
      });
  } catch (error) {
    console.log("Error while connecting db : ", error);
    process.exit(1);
  }
};

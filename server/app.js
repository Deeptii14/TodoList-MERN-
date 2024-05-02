const express = require("express");
const app = express();
const {dbConnect}= require("./config/database");
const userRoutes = require("./routes/routes");
const cors = require('cors');

const PORT = 3000;

app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", userRoutes);


//get request
app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "Your Server is running and up to date",
    });
  });


//start server
app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`);
});

//database connection
dbConnect();


//ES6 syntax:
import express from "express";
import { dbConnect } from "./config/database.js";
import userRoutes from "./routes/routes.js";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/auth", userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// Default Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Your Server is running and up to date",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server started successfully at ${PORT}`);
});

// Database Connection
dbConnect();
